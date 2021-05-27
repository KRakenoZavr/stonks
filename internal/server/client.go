package server

import (
	"fmt"
	"log"
	"net/http"

	"github.com/Kraken/rtf/internal/services"

	"github.com/Kraken/rtf/internal/utils"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

// Client is a middleman between the websocket connection and the hub.
type Client struct {
	// The websocket connection.
	conn *websocket.Conn

	// Buffered channel of outbound messages.
	send chan interface{}

	username string
}

// AllClients all  clients

// readPump pumps messages from the websocket connection to the hub.
//
// The application runs readPump in a per-connection goroutine. The application
// ensures that there is at most one reader on a connection by executing all
// reads from this goroutine.
func (c *Client) readPump(server *Server) {
	defer func() {
		c.conn.Close()
	}()

	for {
		msg := utils.ConnMessage{}
		err := c.conn.ReadJSON(&msg)
		if err != nil {
			fmt.Println(err)
			return
		}

		msg.From = c.username

		if ok := server.cache.UserExists(c.username); !ok {
			delete(server.hub.clients, c.username)
			c.conn.Close()
			return
		}

		switch msg.Type {
		case "":
			continue
		case "info":
			if msg.Msg == "left" {
				delete(server.hub.clients, c.username)
				c.conn.Close()
			}
		case "history":
			break
		default:
			server.store.Chat().Save(msg)
		}

		server.hub.broadcast <- msg
	}
}

// writePump pumps messages from the hub to the websocket connection.
//
// A goroutine running writePump is started for each connection. The
// application ensures that there is at most one writer to a connection by
// executing all writes from this goroutine.
func (c *Client) writePump() {
	defer func() {
		c.conn.Close()
	}()
	for {
		message, ok := <-c.send
		if !ok {
			// The hub closed the channel.
			c.conn.WriteMessage(websocket.CloseMessage, []byte{})
			return
		}
		c.conn.WriteJSON(message)

	}
}

// serveWs handles websocket requests from the peer.
func (s *Server) ServeWs(w http.ResponseWriter, r *http.Request) {
	cookie, err := r.Cookie("session_token")
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	user, ok := services.Authenticated(cookie.Value, s.cache)
	if !ok {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return
	}
	client := &Client{conn: conn, send: make(chan interface{})}

	client.username = user.Username
	s.hub.clients[client.username] = client

	// Allow collection of memory referenced by the caller by doing all work in
	// new goroutines.
	go client.writePump()
	go client.readPump(s)
}

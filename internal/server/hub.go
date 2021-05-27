package server

import (
	"sort"

	"github.com/Kraken/rtf/internal/store"
	"github.com/Kraken/rtf/internal/utils"
)

// Hub maintains the set of active clients and broadcasts messages to the
// clients.
type Hub struct {
	// Registered clients.
	clients map[string]*Client

	// Inbound messages from the clients.
	broadcast chan interface{}

	store store.Store
}

func NewHub(store store.Store) *Hub {
	return &Hub{
		broadcast: make(chan interface{}),
		clients:   make(map[string]*Client),
		store:     store,
	}
}

func (h *Hub) Run() {
	for {
		message := <-h.broadcast

		switch v := message.(type) {
		case utils.ConnMessage:
			if v.Type == "info" {
				h.updateOnlineUsersList()
				continue
			}

			if v.Type == "history" {
				h.sendHistory(v)
				continue
			}

			if client, ok := h.clients[v.To]; ok {
				h.sendTo(client, v)
				h.sendTo(h.clients[v.From], v)
			} else if !ok {
				h.sendTo(h.clients[v.From], v)
			}
		}

	}
}

func (h *Hub) sendHistory(connMsg utils.ConnMessage) {
	user1, err := h.store.User().FindByName(connMsg.From)
	if err != nil {
		return
	}

	user2, err := h.store.User().FindByName(connMsg.To)
	if err != nil {
		return
	}
	history, err := h.store.Chat().FindByUsers(user1, user2)
	if err != nil {
		return
	}

	if client, ok := h.clients[connMsg.From]; ok {
		h.sendTo(client, history)
	}
}

func (h *Hub) updateOnlineUsersList() {
	var senders []string
	var err error

	for _, client := range h.clients {
		senders, _ = h.store.Chat().FindSenders(client.username)
		if err != nil {
			continue
		}

		// if len(senders) == 0 {
		// 	h.sendTo(client, h.clientsUsernames())
		// 	continue
		// }
		senders = append(senders, h.clientsUsernames()...)
		h.sendTo(client, senders)
	}
}

func (h *Hub) sendTo(client *Client, message interface{}) {
	select {
	case client.send <- message:
	default:
		close(client.send)
		delete(h.clients, client.username)
	}
}

func (h *Hub) clientsUsernames() []string {
	usernames := make([]string, len(h.clients))
	i := 0

	for username := range h.clients {
		usernames[i] = username
		i++
	}
	sort.Strings(usernames)

	return usernames
}

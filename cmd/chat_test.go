package main

// func TestSendHistory(t *testing.T) {
// 	// Create test server with the echo handler.
// 	ws := test.TestWsServer(t)
// 	defer ws.Close()

// 	// Send message to server, read response and check to see if it's what we expect.
// 	for i := 0; i < 10; i++ {
// 		if err := ws.WriteMessage(websocket.TextMessage, []byte("hello")); err != nil {
// 			t.Fatalf("%v", err)
// 		}
// 		_, p, err := ws.ReadMessage()
// 		if err != nil {
// 			t.Fatalf("%v", err)
// 		}

// 		if string(p) != "hello" {
// 			t.Fatalf("bad message")
// 		}
// 	}
// }

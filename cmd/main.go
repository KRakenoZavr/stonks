package main

import (
	"log"
	"os"

	"github.com/Kraken/rtf/internal/models"
	Server "github.com/Kraken/rtf/internal/server"
	sqlstore "github.com/Kraken/rtf/internal/store/sqlstore"
)

func main() {
	db, err := models.Init("forum.db")
	if err != nil {
		log.Fatal(err)
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	port = ":" + port

	store := sqlstore.New(db)
	server := Server.NewServer(store)

	log.Fatal(server.Start(port))
}

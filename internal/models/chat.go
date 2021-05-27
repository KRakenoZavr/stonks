package models

import (
	_ "github.com/mattn/go-sqlite3"
)

type Message struct {
	Id           string
	CreationDate string
	From         User
	To           User
	Body         string
	ChatMembers  string
}

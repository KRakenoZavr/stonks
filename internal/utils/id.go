package utils

import (
	"crypto/rand"

	uuid "github.com/satori/go.uuid"
)

func GenerateId() string {
	b := make([]byte, 16)
	rand.Read(b)
	newId := uuid.NewV4()
	return newId.String()
}

package services

import (
	"errors"
	"fmt"

	"github.com/Kraken/rtf/internal/models"
)

func ValidPost(p models.Post) error {
	if len(p.Title) < 1 {
		fmt.Println(p.Title)
		return errors.New("title must be at least 1 symbol")
	}

	if len(p.Description) < 1 {
		return errors.New("content must be at least 1 symbol")
	}

	return nil
}

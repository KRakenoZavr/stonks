package teststore

import (
	"database/sql"

	"github.com/Kraken/rtf/internal/models"

	"github.com/Kraken/rtf/internal/store"
)

type Store struct {
	userRepository *UserRepository
}

func New(db *sql.DB) *Store {
	return &Store{}
}

func (s *Store) User() store.UserRepository {
	if s.userRepository != nil {
		return s.userRepository
	}

	s.userRepository = &UserRepository{
		store: s,
		users: make(map[string]*models.User),
	}

	return s.userRepository
}

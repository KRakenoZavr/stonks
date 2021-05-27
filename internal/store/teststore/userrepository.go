package teststore

import (
	"strconv"

	"github.com/Kraken/rtf/internal/models"
)

// UserRepository ...
type UserRepository struct {
	store *Store
	users map[string]*models.User
}

// Create ...
func (r *UserRepository) Create(u *models.User) error {
	r.users[u.Username] = u
	u.Id = strconv.Itoa(len(r.users))
	return nil
}

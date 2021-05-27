package services

import (
	"time"

	"github.com/Kraken/rtf/internal/models"
)

type Cache struct {
	tokenExpires map[string]time.Time
	tokenUser    map[string]models.User
	userToken    map[string]string
}

func NewCache() *Cache {
	var c Cache
	c.tokenUser = make(map[string]models.User)
	c.userToken = make(map[string]string)
	c.tokenExpires = make(map[string]time.Time)

	return &c
}

func (c *Cache) UserByToken(token string) models.User {
	return c.tokenUser[token]
}

// func (c *Cache) TokenByUsename(username string) string {
// 	return c.userToken[username]
// }

func (c *Cache) Add(user models.User, token string, expires time.Time) {
	c.tokenUser[token] = user
	c.userToken[user.Username] = token
	c.tokenExpires[token] = expires
}

func (c *Cache) DeleteToken(token string) {
	user := c.tokenUser[token]

	delete(c.tokenUser, token)
	delete(c.userToken, user.Username)
	delete(c.tokenExpires, token)
}

func (c *Cache) DeleteUser(username string) {
	token := c.userToken[username]

	delete(c.tokenUser, token)
	delete(c.userToken, username)
	delete(c.tokenExpires, token)
}

func (c *Cache) TokenExists(token string) bool {
	user := c.tokenUser[token]
	if user.Username == "" {
		return false
	}

	return true
}

func (c *Cache) Expired(token string) bool {

	return true
}

func (c *Cache) UserExists(user string) bool {
	token := c.userToken[user]
	if token == "" {
		return false
	}

	return true
}

func (c *Cache) Match(token string, user string) bool {
	tokenByUser := c.userToken[user]
	if tokenByUser != token {
		return false
	}

	return true
}

func (c *Cache) OnlineUsers() []models.User {
	var users []models.User
	for _, user := range c.tokenUser {
		onlineUser := models.User{
			Id:       user.Id,
			Username: user.Username,
		}
		users = append(users, onlineUser)
	}

	return users
}

func Authenticated(token string, cache *Cache) (user models.User, authed bool) {
	if !cache.TokenExists(token) {
		cache.DeleteToken(token)
		return user, false
	} else if !cache.Match(token, cache.UserByToken(token).Username) {
		cache.DeleteToken(token)
		return user, false
	}

	if time.Now().After(cache.tokenExpires[token]) {
		cache.DeleteToken(token)
		return user, false
	}

	user = cache.UserByToken(token)

	return user, true
}

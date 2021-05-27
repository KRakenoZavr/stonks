package server

import (
	"encoding/json"
	"errors"
	"fmt"
	"html/template"
	"net/http"
	"time"

	"github.com/Kraken/rtf/internal/models"
	"github.com/Kraken/rtf/internal/services"
	uuid "github.com/satori/go.uuid"
)

func (s *Server) GetAuth(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/authentication" {
		w.WriteHeader(http.StatusNotFound)
		fmt.Fprintf(w, "404 Page not found")
		return
	}
	t, err := template.ParseFiles("../internal/templates/authentication.html")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintf(w, "%v", http.StatusInternalServerError)
		return
	}
	t.Execute(w, nil)
}

func (s *Server) HandleAuth(w http.ResponseWriter, r *http.Request) {
	requestBody := struct {
		Nickname string `json:"nickname"`
		Password string `json:"password"`
	}{}

	response := struct {
		ErrorText string
		Status    int
	}{}

	err := json.NewDecoder(r.Body).Decode(&requestBody)
	if err != nil {
		fmt.Println(err.Error())
		response.ErrorText = "Bad Request"
		response.Status = http.StatusBadRequest
		json.NewEncoder(w).Encode(response)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	login := requestBody.Nickname
	password := requestBody.Password

	err = s.correctUser(login, password)
	if err != nil {
		response.ErrorText = "Invalid login credentials"
		response.Status = 401
		w.WriteHeader(401)
		json.NewEncoder(w).Encode(response)
		return
	}

	user, err := s.store.User().FindByName(login)
	if err != nil {
		response.ErrorText = "Bad Request"
		response.Status = http.StatusBadRequest
		json.NewEncoder(w).Encode(response)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	s.authenticate(w, user)
	json.NewEncoder(w).Encode(response)
	w.WriteHeader(200)
	return
}

func (s *Server) authenticate(w http.ResponseWriter, user models.User) {
	if s.cache.UserExists(user.Username) {
		s.cache.DeleteUser(user.Username)
	}

	sessionToken := uuid.NewV4()
	expires := time.Now().Add(1 * time.Hour)
	s.cache.Add(user, sessionToken.String(), expires)

	http.SetCookie(w, &http.Cookie{
		Name:     "session_token",
		Value:    sessionToken.String(),
		Expires:  expires,
		HttpOnly: true,
	})
}

func (s *Server) correctUser(login, password string) error {
	user, err := s.store.User().FindByName(login)
	if err != nil {
		return err
	}

	if login == user.Username || login == user.Email {
		decryptedPass, err := services.Decrypt(user.Password)
		if err != nil {
			return err
		}

		if decryptedPass == password {
			return nil
		} else {
			return errors.New("wrong password")

		}

	} else {
		return errors.New("wrong username")
	}

}

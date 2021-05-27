package server

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"strings"
	"time"

	"github.com/gorilla/mux"

	models "github.com/Kraken/rtf/internal/models"
	"github.com/Kraken/rtf/internal/services"
	uuid "github.com/satori/go.uuid"
)

func (s *Server) SaveCommentHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	postId := vars["id"]

	cookie, err := r.Cookie("session_token")
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		fmt.Println(err)
		return
	}

	user, authed := services.Authenticated(cookie.Value, s.cache)
	if !authed {
		w.WriteHeader(http.StatusUnauthorized)
		fmt.Println(err)
		return
	}

	user, err = s.store.User().FindByName(user.Username)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Println(err)
		return
	}

	post, err := s.store.Post().FindById(postId)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Println(err)
		return
	}

	newId := uuid.NewV4()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Println(err)
		return
	}

	requestBody := struct {
		Description string `json:"description"`
	}{}

	err = json.NewDecoder(r.Body).Decode(&requestBody)
	if err != nil {
		fmt.Println(err.Error())
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	description := requestBody.Description

	comment := models.Comment{
		Id:          newId.String(),
		Description: description,
		PostDate:    time.Now().String(),
		User:        user,
		Post:        post,
	}

	err = validComment(comment)
	if err != nil {
		fmt.Fprintf(w, err.Error())
		return
	}

	err = s.store.Comment().Create(comment)
	if err != nil {
		fmt.Fprintf(w, err.Error())
		return
	}

	// redirect to same post
	postUrlLastIndex := strings.LastIndex(r.URL.Path, "/")
	postURL := r.URL.Path[:postUrlLastIndex]
	http.Redirect(w, r, postURL, 302)
}

func (s *Server) DeleteCommentHandler(w http.ResponseWriter, r *http.Request) {

	requestBody := struct {
		Id string `json:"id"`
	}{}

	err := json.NewDecoder(r.Body).Decode(&requestBody)
	commentId := requestBody.Id

	err = s.store.Comment().Drop(commentId)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Println(err)
	}

}

func validComment(c models.Comment) error {
	if len(c.Description) < 3 {
		fmt.Println(c.Description)
		return errors.New("title must be at least 3 symbol")
	}
	return nil
}

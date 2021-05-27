package server

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"html/template"
	"net/http"

	"github.com/Kraken/rtf/internal/models"
	"github.com/Kraken/rtf/internal/services"
	uuid "github.com/satori/go.uuid"
)

func (s *Server) Load(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" && r.URL.Path != "/trade" && r.URL.Path != "/createtrade" && r.URL.Path != "/documents" && r.URL.Path != "/post/polozhenie" && r.URL.Path != "/post/pravila" && r.URL.Path != "/post/perechen" && r.URL.Path != "/post/zakon" && r.URL.Path != "/post/tipovye" && r.URL.Path != "/clearing" && r.URL.Path != "/post/kliringovaya" && r.URL.Path != "/members" && r.URL.Path != "/arbitrage" && r.URL.Path != "/about" && r.URL.Path != "/post/kontakty" && r.URL.Path != "/sign_up" {
		w.WriteHeader(http.StatusNotFound)
		fmt.Fprintf(w, "404 Page not found")
		return
	}
	t, err := template.ParseFiles("internal/templates/index.html")
	if err != nil {
		fmt.Println(err.Error())
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	err = t.Execute(w, nil)
	if err != nil {
		fmt.Println(err.Error())
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}

func (s *Server) GetMain(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/api/all" {
		w.WriteHeader(http.StatusNotFound)
		fmt.Fprintf(w, "404 Page not found")
		return
	}

	var user models.User
	var authed bool

	cookie, err := r.Cookie("session_token")
	if err == nil {
		user, authed = services.Authenticated(cookie.Value, s.cache)
		user, err = s.store.User().FindByName(user.Username)
		if err != nil {
			fmt.Println(err.Error())
			w.WriteHeader(http.StatusInternalServerError)
		}
	}

	response := struct {
		Authed bool
		User   models.User
	}{
		authed,
		user,
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(response)
}

func (s *Server) Rate(w http.ResponseWriter, r *http.Request) {
	requestBody := struct {
		Action   string `json:"action"`
		Target   string `json:"target"`
		TargetID string `json:"targetId"`
		UserID   string `json:"userId"`
	}{}

	response := struct {
		ErrorText string
		Status    int
	}{}

	cookie, err := r.Cookie("session_token")
	if err != nil {
		response.ErrorText = err.Error()
		response.Status = http.StatusUnauthorized
		json.NewEncoder(w).Encode(response)
		w.WriteHeader(http.StatusUnauthorized)
		fmt.Println(err)
		return
	}

	if ok := s.cache.TokenExists(cookie.Value); !ok {
		response.ErrorText = err.Error()
		response.Status = http.StatusUnauthorized
		json.NewEncoder(w).Encode(response)
		w.WriteHeader(http.StatusUnauthorized)
		fmt.Println(err)
		return
	}

	err = json.NewDecoder(r.Body).Decode(&requestBody)
	if err != nil {
		fmt.Println(err.Error())
		response.ErrorText = err.Error()
		response.Status = http.StatusBadRequest
		json.NewEncoder(w).Encode(response)
		w.WriteHeader(http.StatusBadRequest)
		fmt.Println(err)
		return
	}

	if requestBody.Action != "like" && requestBody.Action != "dislike" {
		fmt.Println(err.Error())
		response.ErrorText = err.Error()
		response.Status = http.StatusBadRequest
		json.NewEncoder(w).Encode(response)
		w.WriteHeader(http.StatusBadRequest)
		fmt.Println(err)
		return
	}

	newId := uuid.NewV4()
	if err != nil {
		fmt.Println(err.Error())
		response.ErrorText = err.Error()
		response.Status = http.StatusInternalServerError
		json.NewEncoder(w).Encode(response)
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Println(err)
		return
	}

	user, err := s.store.User().FindById(requestBody.UserID)
	if err != nil {
		fmt.Println(err.Error())
		response.ErrorText = err.Error()
		response.Status = http.StatusBadRequest
		json.NewEncoder(w).Encode(response)
		w.WriteHeader(http.StatusBadRequest)
		fmt.Println(err)
		return
	}

	switch requestBody.Target {
	case "post":
		rate, err := s.store.Rate().FindByPost(requestBody.UserID, requestBody.TargetID)
		if err != nil && err != sql.ErrNoRows {
			fmt.Println(err.Error())
			response.ErrorText = err.Error()
			response.Status = http.StatusInternalServerError
			json.NewEncoder(w).Encode(response)
			w.WriteHeader(http.StatusInternalServerError)
			fmt.Println(err)
			return
		}

		s.store.Rate().DropFromPost(requestBody.UserID, requestBody.TargetID)

		// return after deleting rate if user pressed same button
		if rate.Value == requestBody.Action {
			return
		}

		post, err := s.store.Post().FindById(requestBody.TargetID)
		if err != nil {
			fmt.Println(err.Error())
			response.ErrorText = err.Error()
			response.Status = http.StatusBadRequest
			json.NewEncoder(w).Encode(response)
			w.WriteHeader(http.StatusBadRequest)
			fmt.Println(err)
			return
		}

		rate = models.RatedPost{
			Id:    newId.String(),
			Value: requestBody.Action,
			Post:  post,
			User:  user,
		}

		err = s.store.Rate().InsertToPost(rate)
		if err != nil {
			fmt.Println(err.Error())
			response.ErrorText = err.Error()
			response.Status = http.StatusInternalServerError
			json.NewEncoder(w).Encode(response)
			w.WriteHeader(http.StatusInternalServerError)
			fmt.Println(err)
			return
		}

	case "comment":
		rate, err := s.store.Rate().FindByComment(requestBody.UserID, requestBody.TargetID)
		if err != nil && err != sql.ErrNoRows {
			fmt.Println(err.Error())
			response.ErrorText = err.Error()
			response.Status = http.StatusInternalServerError
			json.NewEncoder(w).Encode(response)
			w.WriteHeader(http.StatusInternalServerError)
			fmt.Println(err)
			return
		}

		s.store.Rate().DropFromComment(requestBody.UserID, requestBody.TargetID)

		// return after deleting rate if user pressed same button
		if rate.Value == requestBody.Action {
			return
		}

		comment, err := s.store.Comment().FindById(requestBody.TargetID)
		if err != nil {
			fmt.Println(err.Error())
			response.ErrorText = err.Error()
			response.Status = http.StatusBadRequest
			json.NewEncoder(w).Encode(response)
			w.WriteHeader(http.StatusBadRequest)
			fmt.Println(err)
			return
		}

		rate = models.RatedComment{
			Id:      newId.String(),
			Value:   requestBody.Action,
			Comment: comment,
			User:    user,
		}

		err = s.store.Rate().InsertToComment(rate)
		if err != nil {
			fmt.Println(err.Error())
			response.ErrorText = err.Error()
			response.Status = http.StatusInternalServerError
			json.NewEncoder(w).Encode(response)
			w.WriteHeader(http.StatusInternalServerError)
			fmt.Println(err)
			return
		}

	default:
		fmt.Println(err.Error())
		response.ErrorText = err.Error()
		response.Status = http.StatusBadRequest
		json.NewEncoder(w).Encode(response)
		w.WriteHeader(http.StatusBadRequest)
		fmt.Println(err)
		return
	}
	json.NewEncoder(w).Encode(response)
}

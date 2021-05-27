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

func (s *Server) HandleRegistration(w http.ResponseWriter, r *http.Request) {
	requestBody := struct {
		Email           string
		Password        string
		CompanyDirector string
		CompanyName     string
		CountryId       string
		RegionId        string
		DistrictId      string
		PostalCode      string
		Address         string
		BIN             string
		BIK             string
		IIK             string
		BankName        string
		ContactName     string
		ContactPhone    string
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

	var user models.User
	id := uuid.NewV4()
	if err != nil {
		response.ErrorText = "Internal Server Error"
		response.Status = http.StatusInternalServerError
		json.NewEncoder(w).Encode(response)
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintf(w, "500 Internal server error")
		return
	}

	user.Username = requestBody.Email
	user.Email = requestBody.Email
	user.Password = requestBody.Password
	user.CompanyDirector = requestBody.CompanyDirector
	user.CompanyName = requestBody.CompanyName
	user.CountryId = requestBody.CountryId
	user.RegionId = requestBody.RegionId
	user.DistrictId = requestBody.DistrictId
	user.PostalCode = requestBody.PostalCode
	user.Address = requestBody.Address
	user.BIN = requestBody.BIN
	user.BIK = requestBody.BIK
	user.IIK = requestBody.IIK
	user.BankName = requestBody.BankName
	user.ContactName = requestBody.ContactName
	user.ContactPhone = requestBody.ContactPhone
	user.Id = id.String()
	user.RegistrationDate = time.Now().String()

	err = s.register(user)
	if err != nil {
		response.ErrorText = err.Error()
		response.Status = 401
		json.NewEncoder(w).Encode(response)
		return
	}

	s.authenticate(w, user)
	json.NewEncoder(w).Encode(response)
	w.WriteHeader(200)
	return
}

func (s *Server) GetRegistration(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/registration" {
		w.WriteHeader(http.StatusNotFound)
		fmt.Fprintf(w, "404 Page not found")
		return
	}

	t, err := template.ParseFiles("../internal/templates/registration.html")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintf(w, "500 Internal server error")
		return
	}
	t.Execute(w, nil)
}

func (s *Server) register(usr models.User) error {
	err := s.validUser(usr)
	if err != nil {
		return err
	}

	err = s.uniqueUser(usr)
	if err != nil {
		return err
	}

	usr.Password, err = services.Encrypt(usr.Password)
	if err != nil {
		return err
	}

	err = s.store.User().Create(usr)
	if err != nil {
		return err
	}

	return nil
}

func (s *Server) validUser(usr models.User) error {
	if len(usr.Password) < 6 {
		return errors.New("password must be at least 6 symbols")
	}

	if len(usr.Username) < 3 {
		return errors.New("username must be at least 3 symbols")
	}

	return nil
}

func (s *Server) uniqueUser(newUsr models.User) error {
	user, err := s.store.User().FindByName(newUsr.Username)
	if err != nil {
		return err
	}

	if user != (models.User{}) {
		return errors.New("username already taken")
	}

	return nil
}

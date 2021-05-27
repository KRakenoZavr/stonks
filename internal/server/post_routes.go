package server

import (
	"encoding/json"
	"fmt"
	"html/template"
	"net/http"
	"time"

	"github.com/Kraken/rtf/internal/models"
	"github.com/Kraken/rtf/internal/services"
	"github.com/Kraken/rtf/internal/utils"
	"github.com/gorilla/mux"
)

func (s *Server) GetPosts(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/api/posts" {
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

	ratedPosts, err := s.store.Rate().FindRatedPosts()
	if err != nil {
		fmt.Println(err.Error())
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	ratedComments, err := s.store.Rate().FindRatedComments()
	if err != nil {
		fmt.Println(err.Error())
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	sortBy := r.FormValue("sortBy")
	response := struct {
		Posts         []models.PostDTO
		Authed        bool
		User          models.User
		LikedPosts    []models.RatedPost
		LikedComments []models.RatedComment
	}{
		Posts:         nil,
		Authed:        authed,
		User:          user,
		LikedPosts:    ratedPosts,
		LikedComments: ratedComments,
	}

	switch sortBy {
	case "created", "liked", "standard", "shadow", "thinkertoy":
		if (sortBy == "created" || sortBy == "liked") && !authed {
			w.WriteHeader(http.StatusForbidden)
			return
		}

		posts, err := s.store.Post().FindAllSorted(sortBy, user)
		if err != nil {
			fmt.Println("main_route : 58")
			fmt.Println(err.Error())
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		response.Posts = posts

	default:
		posts, err := s.store.Post().FindAll()
		if err != nil {
			fmt.Println(err.Error())
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		response.Posts = posts
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(response)
}

func (s *Server) HandlePostPageRoute(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	post, err := s.store.Post().FindById(id)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Println(err)
		return
	}

	if post == (models.Post{}) {
		w.WriteHeader(http.StatusNotFound)
		fmt.Fprintf(w, "404 Not Found")
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

func (s *Server) HandlePostPage(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	post, err := s.store.Post().FindById(id)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Println(err)
		return
	}

	// if post == (models.Post{}) {
	// 	w.WriteHeader(http.StatusNotFound)
	// 	fmt.Fprintf(w, "404 Not Found")
	// 	return
	// }

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

	comments, err := s.store.Comment().FindByPostId(post.Id)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Println(err)
		return
	}

	ratedPosts, err := s.store.Rate().FindRatedPosts()
	if err != nil {
		fmt.Println(err.Error())
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	ratedComments, err := s.store.Rate().FindRatedComments()
	if err != nil {
		fmt.Println(err.Error())
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	categories, err := s.store.Category().FindByPostId(id)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Println(err)
		return
	}

	likes, err := s.store.Rate().RatedPostCount(post.Id, "like")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Println(err)
		return
	}

	dislikes, err := s.store.Rate().RatedPostCount(post.Id, "dislike")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Println(err)
		return
	}

	response := struct {
		Post          models.Post
		Authed        bool
		Comments      []models.CommentDTO
		User          models.User
		RatedPosts    []models.RatedPost
		RatedComments []models.RatedComment
		Categories    []models.Category
		Likes         int
		Dislikes      int
	}{
		post,
		authed,
		comments,
		user,
		ratedPosts,
		ratedComments,
		categories,
		likes,
		dislikes,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func (s *Server) WritePost(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("../internal/templates/write.html")

	if !utils.ValidURL(r.URL.Path, 1) {
		w.WriteHeader(http.StatusNotFound)
		fmt.Fprintf(w, "404 Page not found")
		return
	}

	cookie, err := r.Cookie("session_token")
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		fmt.Println(err)
		return
	}

	_, ok := services.Authenticated(cookie.Value, s.cache)
	if !ok {
		http.Redirect(w, r, "/authentication", http.StatusUnauthorized)
		return
	}

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	t.ExecuteTemplate(w, "write", nil)
}

func (s *Server) SavePostHandler(w http.ResponseWriter, r *http.Request) {
	var post models.Post
	var err error
	// categories := []string{"standard", "shadow", "thinkertoy"}

	requestBody := struct {
		Description string   `json:"description"`
		Name        []string `json:"name"`
		Theme       string   `json:"theme"`
		Date1       string   `json:"Date1"`
		Date2       string   `json:"Date2"`
		Sum         string   `json:"Sum"`
		Initiator   string   `json:"Initiator"`
		Broker      string   `json:"Broker"`
		SaleMode    string   `json:"SaleMode"`
		StartPrice  string   `json:"StartPrice"`
		Measurment  string   `json:"Measurment"`
		Count       string   `json:"Count"`
		Docs        string   `json:"Docs"`
	}{}

	response := struct {
		ErrorText string
		Status    int
	}{}

	err = json.NewDecoder(r.Body).Decode(&requestBody)

	post.Id = utils.GenerateId()
	post.Description = requestBody.Description
	post.Date1 = requestBody.Date1
	post.Date2 = requestBody.Date2
	post.Sum = requestBody.Sum
	post.Initiator = requestBody.Initiator
	post.Broker = requestBody.Broker
	post.SaleMode = requestBody.SaleMode
	post.StartPrice = requestBody.StartPrice
	post.Measurment = requestBody.Measurment
	post.Count = requestBody.Count
	post.Docs = requestBody.Docs
	t := time.Now()
	post.PostDate = t.Format(time.RFC1123)

	cookie, err := r.Cookie("session_token")
	if err != nil {
		response.ErrorText = err.Error()
		response.Status = http.StatusUnauthorized
		json.NewEncoder(w).Encode(response)
		w.WriteHeader(http.StatusUnauthorized)
		fmt.Println(err)
		return
	}

	user, ok := services.Authenticated(cookie.Value, s.cache)
	if !ok {
		response.ErrorText = err.Error()
		response.Status = http.StatusUnauthorized
		json.NewEncoder(w).Encode(response)
		w.WriteHeader(http.StatusUnauthorized)
		// http.Redirect(w, r, "/authentication", http.StatusUnauthorized)
		return
	}

	user, err = s.store.User().FindByName(user.Username)
	if err != nil {
		response.ErrorText = err.Error()
		response.Status = http.StatusInternalServerError
		json.NewEncoder(w).Encode(response)
		fmt.Println(err.Error())
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	post.Title = requestBody.Theme
	post.User.Id = user.Id

	var postcategories models.PostsCategories

	for _, name := range requestBody.Name {
		postcategories.Id = utils.GenerateId()
		postcategories.Category.Id, err = s.store.Category().Valid(name)
		if err != nil {
			response.ErrorText = err.Error()
			response.Status = http.StatusInternalServerError
			json.NewEncoder(w).Encode(response)
			fmt.Println(err.Error())
			w.WriteHeader(http.StatusInternalServerError)
			return
		}

		postcategories.Post.Id = post.Id
		err := s.store.Category().Insert(postcategories)
		if err != nil {
			response.ErrorText = err.Error()
			response.Status = http.StatusInternalServerError
			json.NewEncoder(w).Encode(response)
			fmt.Println(err.Error())
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
	}

	err = services.ValidPost(post)
	if err != nil {
		response.ErrorText = err.Error()
		response.Status = http.StatusBadRequest
		json.NewEncoder(w).Encode(response)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	err = s.store.Post().Create(post)
	if err != nil {
		response.ErrorText = err.Error()
		response.Status = http.StatusInternalServerError
		json.NewEncoder(w).Encode(response)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(response)
	http.Redirect(w, r, "/", 302)
}

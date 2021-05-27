package server

import (
	"fmt"
	"net/http"

	"github.com/Kraken/rtf/internal/services"

	"github.com/Kraken/rtf/internal/store"
	"github.com/gorilla/mux"
)

type Server struct {
	router *mux.Router
	store  store.Store
	cache  *services.Cache
}

func NewServer(store store.Store) (s *Server) {
	s = &Server{
		router: mux.NewRouter(),
		store:  store,
		cache:  services.NewCache(),
	}

	s.configureRouter()

	return s
}

func (s *Server) Start(bindAddr string) error {
	s.configureRouter()

	fmt.Printf("app is running on %s\n", bindAddr)

	return http.ListenAndServe(bindAddr, s.router)
}

func (s *Server) configureRouter() {
	s.router.HandleFunc("/", s.Load).Methods("GET")
	s.router.HandleFunc("/trade", s.Load).Methods("GET")
	s.router.HandleFunc("/documents", s.Load).Methods("GET")
	s.router.HandleFunc("/post/polozhenie", s.Load).Methods("GET")
	s.router.HandleFunc("/post/pravila", s.Load).Methods("GET")
	s.router.HandleFunc("/post/perechen", s.Load).Methods("GET")
	s.router.HandleFunc("/post/zakon", s.Load).Methods("GET")
	s.router.HandleFunc("/post/tipovye", s.Load).Methods("GET")
	s.router.HandleFunc("/clearing", s.Load).Methods("GET")
	s.router.HandleFunc("/post/kliringovaya", s.Load).Methods("GET")
	s.router.HandleFunc("/members", s.Load).Methods("GET")
	s.router.HandleFunc("/arbitrage", s.Load).Methods("GET")
	s.router.HandleFunc("/about", s.Load).Methods("GET")
	s.router.HandleFunc("/post/kontakty", s.Load).Methods("GET")
	s.router.HandleFunc("/sign_up", s.Load).Methods("GET")
	s.router.HandleFunc("/createtrade", s.Load).Methods("GET")

	s.router.HandleFunc("/posts/{id}", s.HandlePostPageRoute).Methods("GET")

	s.router.HandleFunc("/api/all", s.GetMain).Methods("GET")
	s.router.HandleFunc("/api/posts", s.GetPosts).Methods("GET")
	s.router.HandleFunc("/api/authentication", s.GetAuth).Methods("GET")
	s.router.HandleFunc("/api/post/{id}", s.HandlePostPage).Methods("GET")
	s.router.HandleFunc("/api/logout", s.HandleLogout).Methods("GET")

	s.router.HandleFunc("/registration", s.HandleRegistration).Methods("POST")
	s.router.HandleFunc("/login", s.HandleAuth).Methods("POST")

	s.router.HandleFunc("/posts/{id}/_method=POST", s.SaveCommentHandler).Methods("POST")
	s.router.HandleFunc("/savePost", s.SavePostHandler).Methods("POST")
	s.router.HandleFunc("/rate", s.Rate).Methods("POST")
	s.router.HandleFunc("/posts/{id}/_method=DELETE", s.DeleteCommentHandler).Methods("POST")

	s.router.PathPrefix("/").Handler(http.FileServer(http.Dir("internal/")))
}

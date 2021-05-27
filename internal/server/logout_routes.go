package server

import (
	"net/http"
	"time"
)

func (s *Server) HandleLogout(w http.ResponseWriter, r *http.Request) {
	sessionToken, err := r.Cookie("session_token")
	if err != nil {
		http.Redirect(w, r, "/authentication", http.StatusSeeOther)
		return
	}

	s.cache.DeleteToken(sessionToken.Value)
	http.SetCookie(w, &http.Cookie{
		Name:     "session_token",
		Value:    "",
		Expires:  time.Now(),
		HttpOnly: true,
	})
}

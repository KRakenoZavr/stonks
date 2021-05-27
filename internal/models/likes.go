package models

type RatedPost struct {
	Id    string
	Value string
	Post  Post
	User  User
}

type RatedComment struct {
	Id      string
	Value   string
	Comment Comment
	User    User
}

package models

type CommentDTO struct {
	Comment  Comment
	Likes    int
	Dislikes int
}

type Comment struct {
	Id          string
	Description string
	PostDate    string
	User        User
	Post        Post
}

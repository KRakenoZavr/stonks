package store

import (
	"github.com/Kraken/rtf/internal/models"
	"github.com/Kraken/rtf/internal/utils"
)

type UserRepository interface {
	Create(user models.User) error

	FindByName(username string) (models.User, error)
	FindById(id string) (models.User, error)
}

type PostRepository interface {
	Create(post models.Post) error

	FindAll() ([]models.PostDTO, error)
	FindById(id string) (models.Post, error)
	FindAllSorted(sortBy string, user models.User) ([]models.PostDTO, error)
}

type RateRepository interface {
	FindByPost(userId, postId string) (models.RatedPost, error)
	FindByComment(commentId, postId string) (models.RatedComment, error)

	FindRatedPosts() ([]models.RatedPost, error)
	FindRatedComments() ([]models.RatedComment, error)

	RatedPostCount(postId string, action string) (int, error)
	RatedCommentCount(commentId string, action string) (int, error)

	DropFromPost(userId, postId string) error
	DropFromComment(userId, commentId string) error

	InsertToPost(post models.RatedPost) error
	InsertToComment(comment models.RatedComment) error
}

type CategoryRepository interface {
	Insert(postCategory models.PostsCategories) error
	Valid(categoryName string) (string, error)

	FindByPostId(postId string) ([]models.Category, error)
	FindById(id string) (models.Category, error)
}

type CommentRepository interface {
	Create(comment models.Comment) error

	FindById(id string) (models.Comment, error)
	FindByPostId(postId string) ([]models.CommentDTO, error)

	Drop(commentId string) error
}

type ChatRepository interface {
	Save(utils.ConnMessage) error
	FindByUsers(user1, user2 models.User) (message []models.Message, err error)
	FindSenders(clientName string) (senders []string, err error)
}

package sqlstore

import (
	"fmt"

	"github.com/Kraken/rtf/internal/models"
)

type RateRepository struct {
	store *Store
}

func (r *RateRepository) FindByPost(userId, postId string) (post models.RatedPost, err error) {
	query := fmt.Sprintf("SELECT * FROM likedPosts WHERE UserId LIKE '%s' AND PostId LIKE '%s'", userId, postId)
	err = r.store.db.QueryRow(query).Scan(&post.Id, &post.Value, &post.Post.Id, &post.User.Id)
	return
}

func (r *RateRepository) FindByComment(userId, commentId string) (comment models.RatedComment, err error) {
	query := fmt.Sprintf("SELECT * FROM likedComments WHERE UserId LIKE '%s' AND CommentId LIKE '%s'", userId, commentId)
	err = r.store.db.QueryRow(query).Scan(&comment.Id, &comment.Value, &comment.Comment.Id, &comment.User.Id)
	return
}

func (r *RateRepository) FindRatedPosts() (rated []models.RatedPost, err error) {
	rows, err := r.store.db.Query("SELECT * FROM likedPosts")
	if err != nil {
		return
	}

	post := models.RatedPost{}

	for rows.Next() {
		err = rows.Scan(&post.Id, &post.Value, &post.Post.Id, &post.User.Id)
		if err != nil {
			return
		}

		post.User, err = r.store.User().FindById(post.User.Id)
		if err != nil {
			return
		}

		post.Post, err = r.store.Post().FindById(post.Post.Id)
		if err != nil {
			return
		}

		rated = append(rated, post)
	}
	return
}

func (r *RateRepository) FindRatedComments() (rated []models.RatedComment, err error) {
	rows, err := r.store.db.Query("SELECT * FROM likedComments")
	if err != nil {
		return nil, err
	}

	comment := models.RatedComment{}

	for rows.Next() {
		err = rows.Scan(&comment.Id, &comment.Value, &comment.Comment.Id, &comment.User.Id)
		if err != nil {
			return nil, err
		}

		comment.User, err = r.store.User().FindById(comment.User.Id)
		if err != nil {
			return nil, err
		}

		comment.Comment, err = r.store.Comment().FindById(comment.Comment.Id)
		if err != nil {
			return nil, err
		}

		rated = append(rated, comment)
	}
	return
}

func (r *RateRepository) RatedPostCount(postId, action string) (rates int, err error) {
	query := fmt.Sprintf("SELECT COUNT(*) FROM likedPosts WHERE PostId LIKE '%s' AND Value LIKE '%s'", postId, action)
	err = r.store.db.QueryRow(query).Scan(&rates)
	if err != nil {
		return
	}

	return
}

func (r *RateRepository) RatedCommentCount(commentId, action string) (rates int, err error) {
	query := fmt.Sprintf("SELECT COUNT(*) FROM likedComments WHERE CommentId LIKE '%s' AND Value LIKE '%s'", commentId, action)
	err = r.store.db.QueryRow(query).Scan(&rates)
	if err != nil {
		return
	}

	return
}

func (r *RateRepository) DropFromPost(userId, postId string) error {
	query := fmt.Sprintf("DELETE FROM likedPosts WHERE UserId LIKE '%s' AND PostId LIKE '%s'", userId, postId)
	_, err := r.store.db.Exec(query)

	return err
}

func (r *RateRepository) DropFromComment(userId, commentId string) error {
	query := fmt.Sprintf("DELETE FROM likedComments WHERE UserId LIKE '%s' AND CommentId LIKE '%s'", userId, commentId)
	_, err := r.store.db.Exec(query)

	return err
}

func (r *RateRepository) InsertToPost(post models.RatedPost) error {
	_, err := r.store.db.Exec("INSERT INTO likedPosts (Id,Value,PostId,UserId) values ($1,$2,$3,$4)", post.Id, post.Value, post.Post.Id, post.User.Id)
	return err
}

func (r *RateRepository) InsertToComment(comment models.RatedComment) error {
	_, err := r.store.db.Exec("INSERT INTO likedComments (Id,Value,CommentId,UserId) values ($1,$2,$3,$4)", comment.Id, comment.Value, comment.Comment.Id, comment.User.Id)
	return err
}

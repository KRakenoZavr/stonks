package sqlstore

import (
	"fmt"

	"github.com/Kraken/rtf/internal/models"
)

type CommentRepository struct {
	store *Store
}

func (r *CommentRepository) Create(comment models.Comment) error {
	query := "INSERT INTO COMMENT (Id,Description,Post_date,UserId,PostId) values ($1,$2,$3,$4,$5)"
	_, err := r.store.db.Exec(query, comment.Id, comment.Description, comment.PostDate, comment.User.Id, comment.Post.Id)

	if err != nil {
		return err
	}
	return nil
}

func (r *CommentRepository) FindById(commentId string) (comment models.Comment, err error) {
	query := fmt.Sprintf("SELECT * FROM comment WHERE Id LIKE '%s'", commentId)
	rows, err := r.store.db.Query(query)
	if err != nil {
		return
	}

	for rows.Next() {
		err = rows.Scan(&comment.Id, &comment.Description, &comment.PostDate, &comment.User.Id, &comment.Post.Id)
		if err != nil {
			return
		}

		comment.User, err = r.store.User().FindById(comment.User.Id)
		if err != nil {
			return
		}

		comment.Post, err = r.store.Post().FindById(comment.Post.Id)
		if err != nil {
			return
		}

	}

	return
}

func (r *CommentRepository) FindByPostId(postId string) (comments []models.CommentDTO, err error) {
	query := fmt.Sprintf("SELECT * FROM comment WHERE PostId LIKE '%s'", postId)
	rows, err := r.store.db.Query(query)
	if err != nil {
		return nil, err
	}

	var (
		comment  models.Comment
		likes    int
		dislikes int
	)

	for rows.Next() {
		err = rows.Scan(&comment.Id, &comment.Description, &comment.PostDate, &comment.User.Id, &comment.Post.Id)
		if err != nil {
			fmt.Println(err.Error())
			return nil, err
		}

		comment.User, err = r.store.User().FindById(comment.User.Id)
		if err != nil {
			fmt.Println(err.Error())
			return nil, err
		}

		comment.Post, err = r.store.Post().FindById(comment.Post.Id)
		if err != nil {
			fmt.Println(err.Error())
			return nil, err
		}

		likes, err = r.store.Rate().RatedCommentCount(comment.Id, "like")
		if err != nil {
			fmt.Println(err.Error())
			return nil, err
		}

		dislikes, err = r.store.Rate().RatedCommentCount(comment.Id, "dislike")
		if err != nil {
			fmt.Println(err.Error())
			return nil, err
		}

		comments = append(comments, models.CommentDTO{Comment: comment, Likes: likes, Dislikes: dislikes})
	}

	return
}

func (r *CommentRepository) Drop(commentId string) error {
	_, err := r.store.db.Exec("DELETE FROM comment WHERE Id = $1", commentId)
	if err != nil {
		return err
	}
	return nil
}

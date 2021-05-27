package sqlstore

import (
	"errors"
	"fmt"

	"github.com/Kraken/rtf/internal/models"
)

type PostRepository struct {
	store *Store
}

func (r *PostRepository) Create(post models.Post) error {
	_, err := r.store.db.Exec("INSERT INTO POST (Id,Description,Post_date,UserId,Title,Date1,Date2,Sum,Initiator,Broker,SaleMode,StartPrice,Measurment,Count,Docs) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)", post.Id, post.Description, post.PostDate, post.User.Id, post.Title, post.Date1, post.Date2, post.Sum, post.Initiator, post.Broker, post.SaleMode, post.StartPrice, post.Measurment, post.Count, post.Docs)
	if err != nil {
		return err
	}
	return nil
}

func (r *PostRepository) FindAll() ([]models.PostDTO, error) {
	rows, err := r.store.db.Query("SELECT * FROM Post")
	var postsLikes []models.PostDTO
	if err != nil {
		return nil, err
	}
	for rows.Next() {
		post := models.Post{}

		err := rows.Scan(&post.Id, &post.Description, &post.PostDate, &post.User.Id, &post.Title,
			&post.Date1, &post.Date2, &post.Sum, &post.Initiator, &post.Broker, &post.SaleMode, &post.StartPrice, &post.Measurment, &post.Count, &post.Docs)
		if err != nil {
			return nil, err
		}

		post.User, err = r.store.User().FindById(post.User.Id)
		if err != nil {
			return nil, err
		}

		likes, err := r.store.Rate().RatedPostCount(post.Id, "like")
		if err != nil {
			return nil, err
		}

		dislikes, err := r.store.Rate().RatedPostCount(post.Id, "dislike")
		if err != nil {
			return nil, err
		}

		categories, err := r.store.Category().FindByPostId(post.Id)
		if err != nil {
			return nil, err
		}

		postsLikes = append([]models.PostDTO{models.PostDTO{Post: post, Categories: categories, Likes: likes, Dislikes: dislikes}}, postsLikes...)
	}
	return postsLikes, nil
}

func (r *PostRepository) FindAllSorted(sortBy string, user models.User) (postsDTO []models.PostDTO, err error) {
	var (
		query      string
		post       models.Post
		likes      int
		dislikes   int
		categories []models.Category
	)

	if sortBy == "created" {
		query = fmt.Sprintf("SELECT * FROM POST WHERE UserId LIKE '%s';", user.Id)
	} else if sortBy == "liked" {
		query = fmt.Sprintf("SELECT p.Id, p.Description, p.Post_date, p.UserId, p.Title FROM Post p LEFT JOIN likedPosts l ON p.Id = l.PostId WHERE l.UserId LIKE '%s' AND l.Value LIKE 'like';", user.Id)
	} else if sortBy == "standard" || sortBy == "shadow" || sortBy == "thinkertoy" {
		query = fmt.Sprintf("SELECT p.Id, p.Description, p.Post_date,p.UserId,p.Title FROM PostsCategories pc LEFT JOIN Post p ON pc.PostId = p.Id left JOIN Category c ON pc.CategoryId = c.Id WHERE c.Name LIKE '%s'", sortBy)
	} else {
		return postsDTO, errors.New("no such parameter to sort")
	}

	rows, err := r.store.db.Query(query)
	if err != nil {
		return nil, err
	}

	for rows.Next() {
		err = rows.Scan(&post.Id, &post.Description, &post.PostDate, &post.User.Id, &post.Title,
			&post.Date1, &post.Date2, &post.Sum, &post.Initiator, &post.Broker, &post.SaleMode, &post.StartPrice, &post.Measurment, &post.Count, &post.Docs)
		if err != nil {
			fmt.Println("posts: 116")
			return
		}

		post.User, err = r.store.User().FindById(post.User.Id)
		if err != nil {
			return
		}

		likes, err = r.store.Rate().RatedPostCount(post.Id, "like")
		if err != nil {
			return
		}

		dislikes, err = r.store.Rate().RatedPostCount(post.Id, "dislike")
		if err != nil {
			return
		}

		categories, err = r.store.Category().FindByPostId(post.Id)
		if err != nil {
			fmt.Println("posts : 137")
			return
		}

		postsDTO = append([]models.PostDTO{models.PostDTO{Post: post, Categories: categories, Likes: likes, Dislikes: dislikes}}, postsDTO...)
	}

	return
}

func (r *PostRepository) FindById(id string) (models.Post, error) {
	post := models.Post{}
	query := fmt.Sprintf("SELECT * FROM Post WHERE Id LIKE '%s'", id)
	rows, err := r.store.db.Query(query)
	if err != nil {
		return models.Post{}, err
	}

	for rows.Next() {
		err := rows.Scan(&post.Id, &post.Description, &post.PostDate, &post.User.Id, &post.Title,
			&post.Date1, &post.Date2, &post.Sum, &post.Initiator, &post.Broker, &post.SaleMode, &post.StartPrice, &post.Measurment, &post.Count, &post.Docs)
		if err != nil {
			return models.Post{}, err
		}

		post.User, err = r.store.User().FindById(post.User.Id)
		if err != nil {
			return models.Post{}, err
		}

	}

	return post, nil
}

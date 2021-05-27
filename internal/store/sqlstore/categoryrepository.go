package sqlstore

import (
	"errors"
	"fmt"

	"github.com/Kraken/rtf/internal/models"
)

type CategoryRepository struct {
	store *Store
}

func (r *CategoryRepository) Insert(postCategory models.PostsCategories) error {
	query := "INSERT INTO PostsCategories (Id, PostId, CategoryId) values ($1,$2,$3)"
	_, err := r.store.db.Exec(query, postCategory.Id, postCategory.Post.Id, postCategory.Category.Id)
	if err != nil {
		return err
	}
	return nil
}

func (r *CategoryRepository) Valid(categoryName string) (id string, err error) {
	category := models.Category{}
	query := fmt.Sprintf("SELECT * FROM Category WHERE Name LIKE '%s'", categoryName)

	rows, err := r.store.db.Query(query)
	if err != nil {
		return
	}

	for rows.Next() {
		err = rows.Scan(&category.Id, &category.Name)
		if err != nil {
			return
		}
	}

	if categoryName != category.Name {
		return "", errors.New("No such category")
	}

	id = category.Id

	return
}

func (r *CategoryRepository) FindByPostId(postId string) (categories []models.Category, err error) {
	query := fmt.Sprintf("SELECT CategoryId FROM PostsCategories WHERE PostId LIKE '%s'", postId)
	rows, err := r.store.db.Query(query)

	if err != nil {
		return nil, err
	}

	var category models.Category

	for rows.Next() {

		err := rows.Scan(&category.Id)
		if err != nil {
			return nil, err
		}

		category, err = r.FindById(category.Id)
		if err != nil {
			return nil, err
		}

		categories = append(categories, category)
	}

	return categories, nil
}

func (r *CategoryRepository) FindById(categoryId string) (category models.Category, err error) {
	query := fmt.Sprintf("SELECT * FROM Category WHERE Id LIKE '%s'", categoryId)
	rows, err := r.store.db.Query(query)
	if err != nil {
		fmt.Println(err.Error())
		return
	}

	for rows.Next() {
		err = rows.Scan(&category.Id, &category.Name)
		if err != nil {
			fmt.Println(err.Error())
			return
		}
	}

	return category, nil
}

package sqlstore

import (
	"database/sql"

	"github.com/Kraken/rtf/internal/store"
)

type Store struct {
	db                 *sql.DB
	userRepository     *UserRepository
	postRepository     *PostRepository
	rateRepository     *RateRepository
	categoryRepository *CategoryRepository
	commentRepository  *CommentRepository
	chatRepository     *ChatRepository
}

func New(db *sql.DB) *Store {
	return &Store{
		db: db,
	}
}

func (s *Store) User() store.UserRepository {
	if s.userRepository != nil {
		return s.userRepository
	}

	s.userRepository = &UserRepository{
		store: s,
	}

	return s.userRepository
}

func (s *Store) Post() store.PostRepository {
	if s.postRepository != nil {
		return s.postRepository
	}

	s.postRepository = &PostRepository{
		store: s,
	}

	return s.postRepository
}

func (s *Store) Rate() store.RateRepository {
	if s.rateRepository != nil {
		return s.rateRepository
	}

	s.rateRepository = &RateRepository{
		store: s,
	}

	return s.rateRepository
}

func (s *Store) Category() store.CategoryRepository {
	if s.categoryRepository != nil {
		return s.categoryRepository
	}

	s.categoryRepository = &CategoryRepository{
		store: s,
	}

	return s.categoryRepository
}

func (s *Store) Comment() store.CommentRepository {
	if s.commentRepository != nil {
		return s.commentRepository
	}

	s.commentRepository = &CommentRepository{
		store: s,
	}

	return s.commentRepository
}

func (s *Store) Chat() store.ChatRepository {
	if s.chatRepository != nil {
		return s.chatRepository
	}

	s.chatRepository = &ChatRepository{
		store: s,
	}

	return s.chatRepository
}

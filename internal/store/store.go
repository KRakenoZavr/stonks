package store

type Store interface {
	User() UserRepository
	Post() PostRepository
	Rate() RateRepository
	Category() CategoryRepository
	Comment() CommentRepository
	Chat() ChatRepository
}

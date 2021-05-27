package models

type PostDTO struct {
	Post       Post
	Categories []Category
	Likes      int
	Dislikes   int
}

type Post struct {
	Id          string
	Description string
	PostDate    string
	User        User
	Title       string
	Date1       string
	Date2       string
	Sum         string
	Initiator   string
	Broker      string
	SaleMode    string
	StartPrice  string
	Measurment  string
	Count       string
	Docs        string
}

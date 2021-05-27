package models

import (
	"database/sql"
	"os"

	_ "github.com/mattn/go-sqlite3"
)

type SQLDB interface {
	Exec(query string, args ...interface{}) (sql.Result, error)
}

func Init(dataSource string) (db *sql.DB, err error) {

	// if db is not exists create db
	if _, err = os.Stat(dataSource); os.IsNotExist(err) {
		if db, err = createDB(dataSource); err != nil {
			return nil, err
		}
	}

	db, err = sql.Open("sqlite3", dataSource)
	if err != nil {
		return nil, err
	}

	return db, nil
}

func createDB(dataSource string) (db *sql.DB, err error) {
	os.Create(dataSource)

	db, err = sql.Open("sqlite3", dataSource)
	if err != nil {
		return nil, err
	}

	_, err = db.Exec("CREATE TABLE likedPosts (Id TEXT PRIMARY KEY NOT NULL, Value TEXT NOT NULL, PostId REFERENCES Post(Id), UserId REFERENCES User(Id))")
	if err != nil {
		return nil, err
	}

	_, err = db.Exec("CREATE TABLE likedComments (Id TEXT PRIMARY KEY NOT NULL,Value TEXT NOT NULL,CommentId REFERENCES Comment(Id),UserId REFERENCES User(Id))")
	if err != nil {
		return nil, err
	}

	_, err = db.Exec("CREATE TABLE User (Id TEXT PRIMARY KEY NOT NULL,Username TEXT NOT NULL,Password TEXT NOT NULL,Email TEXT NOT NULL,RegistrationDate TEXT NOT NULL,CompanyName TEXT NOT NULL,CompanyDirector TEXT NOT NULL,CountryId TEXT NOT NULL,RegionId TEXT NOT NULL,DistrictId TEXT NOT NULL,PostalCode TEXT NOT NULL,Address TEXT NOT NULL,BIN TEXT NOT NULL,BIK TEXT NOT NULL,IIK TEXT NOT NULL,BankName TEXT NOT NULL,ContactName TEXT NOT NULL,ContactPhone TEXT NOT NULL,GroupL TEXT NOT NULL)")
	if err != nil {
		return nil, err
	}

	_, err = db.Exec("CREATE TABLE PostsCategories (Id TEXT PRIMARY KEY NOT NULL,PostId REFERENCES Post(Id),CategoryId REFERENCES Category(Id))")
	if err != nil {
		return nil, err
	}

	_, err = db.Exec("CREATE TABLE Post (Id TEXT PRIMARY KEY NOT NULL, Description TEXT NOT NULL, Post_date TEXT NOT NULL, UserId , Title TEXT NOT NULL, Date1 TEXT NOT NULL, Date2 TEXT NOT NULL, Sum TEXT NOT NULL, Initiator TEXT NOT NULL, Broker TEXT NOT NULL, SaleMode TEXT NOT NULL, StartPrice TEXT NOT NULL, Measurment TEXT NOT NULL, Count TEXT NOT NULL, Docs TEXT NOT NULL)")
	if err != nil {
		return nil, err
	}

	_, err = db.Exec("CREATE TABLE Comment(Id TEXT PRIMARY KEY NOT NULL,Description TEXT NOT NULL,Post_date TEXT NOT NULL,UserId REFERENCES User(Id),PostId REFERENCES Post(Id))")
	if err != nil {
		return nil, err
	}

	_, err = db.Exec("CREATE TABLE Message (Id TEXT PRIMARY KEY NOT NULL, CreationDate TEXT NOT NULL, Sender REFERENCES User(Id), Receiver REFERENCES User(Id), Body TEXT NOT NULL, ChatMembers TEXT NOT NULL)")
	if err != nil {
		return nil, err
	}

	_, err = db.Exec("CREATE TABLE Category(Id TEXT PRIMARY KEY NOT NULL,Name TEXT NOT NULL)")
	if err != nil {
		return nil, err
	}

	_, err = db.Exec("CREATE TABLE Groups(Id TEXT PRIMARY KEY NOT NULL, UserId TEXT NOT NULL, GroupName TEXT NOT NULL)")
	if err != nil {
		return nil, err
	}

	// categories := []Category{
	// 	{Id: "1", Name: "standard"},
	// 	{Id: "2", Name: "shadow"},
	// 	{Id: "3", Name: "thinkertoy"},
	// }

	// for _, category := range categories {
	// 	AddCategory(category, db)
	// }

	err = db.Close()
	if err != nil {
		return nil, err
	}

	return nil, nil
}

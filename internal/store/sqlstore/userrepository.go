package sqlstore

import (
	"fmt"

	"github.com/Kraken/rtf/internal/models"
)

type UserRepository struct {
	store *Store
}

func (r *UserRepository) Create(usr models.User) error {
	_, err := r.store.db.Exec(`INSERT INTO USER 
	(Id,Username,Password,Email,RegistrationDate,CompanyName,CompanyDirector,
		CountryId,RegionId,DistrictId,PostalCode,Address,BIN,BIK,IIK,
		BankName,ContactName,ContactPhone,GroupL) values 
		($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19)`,
		usr.Id, usr.Username, usr.Password, usr.Email, usr.RegistrationDate,
		usr.CompanyName, usr.CompanyDirector, usr.CountryId, usr.RegionId,
		usr.DistrictId, usr.PostalCode, usr.Address, usr.BIN, usr.BIK, usr.IIK,
		usr.BankName, usr.ContactName, usr.ContactPhone, "0")
	if err != nil {
		return err
	}
	return nil
}

func (r *UserRepository) AllUsers() ([]models.User, error) {
	rows, err := r.store.db.Query("SELECT * FROM User")
	var users []models.User

	if err != nil {
		return nil, err
	}
	for rows.Next() {
		usr := models.User{}
		err := rows.Scan(&usr.Id, &usr.Username, &usr.Password, &usr.Email, &usr.RegistrationDate,
			&usr.CompanyName, &usr.CompanyDirector, &usr.CountryId, &usr.RegionId,
			&usr.DistrictId, &usr.PostalCode, &usr.Address, &usr.BIN, &usr.BIK, &usr.IIK,
			&usr.BankName, &usr.ContactName, &usr.ContactPhone, &usr.GroupL)
		if err != nil {
			return nil, err
		}
		users = append(users, usr)
	}
	return users, nil
}

func (r *UserRepository) AddUser(usr models.User) error {
	_, err := r.store.db.Exec("INSERT INTO USER (Id,Username,Password,Email,RegistrationDate,CompanyName,CompanyDirector,CountryId,RegionId,DistrictId,PostalCode,Address,BIN,BIK,IIK,BankName,ContactName,ContactPhone,GroupL) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19)",
		usr.Id, usr.Username, usr.Password, usr.Email, usr.RegistrationDate,
		usr.CompanyName, usr.CompanyDirector, usr.CountryId, usr.RegionId,
		usr.DistrictId, usr.PostalCode, usr.Address, usr.BIN, usr.BIK, usr.IIK,
		usr.BankName, usr.ContactName, usr.ContactPhone, "0")
	if err != nil {
		return err
	}
	return nil
}

func (r *UserRepository) FindByName(login string) (models.User, error) {
	usr := models.User{}
	query := fmt.Sprintf("SELECT * FROM User WHERE username LIKE '%s' OR email LIKE '%s'", login, login)
	rows, err := r.store.db.Query(query)
	if err != nil {
		return models.User{}, err
	}

	for rows.Next() {
		err := rows.Scan(&usr.Id, &usr.Username, &usr.Password, &usr.Email, &usr.RegistrationDate,
			&usr.CompanyName, &usr.CompanyDirector, &usr.CountryId, &usr.RegionId,
			&usr.DistrictId, &usr.PostalCode, &usr.Address, &usr.BIN, &usr.BIK, &usr.IIK,
			&usr.BankName, &usr.ContactName, &usr.ContactPhone, &usr.GroupL)
		if err != nil {
			fmt.Println("err", err)
			return models.User{}, err
		}
	}

	return usr, nil
}

func (r *UserRepository) FindById(userId string) (models.User, error) {
	usr := models.User{}
	query := fmt.Sprintf("SELECT * FROM User WHERE Id LIKE '%s'", userId)
	rows, err := r.store.db.Query(query)
	if err != nil {
		return models.User{}, err
	}

	for rows.Next() {
		err := rows.Scan(&usr.Id, &usr.Username, &usr.Password, &usr.Email, &usr.RegistrationDate,
			&usr.CompanyName, &usr.CompanyDirector, &usr.CountryId, &usr.RegionId,
			&usr.DistrictId, &usr.PostalCode, &usr.Address, &usr.BIN, &usr.BIK, &usr.IIK,
			&usr.BankName, &usr.ContactName, &usr.ContactPhone, &usr.GroupL)
		if err != nil {
			return models.User{}, err
		}
	}

	return usr, nil
}

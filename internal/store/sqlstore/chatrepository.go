package sqlstore

import (
	"fmt"

	"github.com/Kraken/rtf/internal/models"
	"github.com/Kraken/rtf/internal/utils"
)

type ChatRepository struct {
	store *Store
}

func (r *ChatRepository) FindSenders(clientName string) (senders []string, err error) {
	rows, err := r.store.db.Query("SELECT CASE " +
		"WHEN ChatMembers like '%&" + clientName + "' THEN " +
		"substr(ChatMembers, instr(ChatMembers, '&'), instr(ChatMembers, '&')-length(ChatMembers)) " +
		"WHEN ChatMembers like '" + clientName + "&%' THEN " +
		"substr(ChatMembers, instr(ChatMembers, '&')+1, length(ChatMembers)-instr(ChatMembers, '&')) " +
		"END client " +
		"from (SELECT * FROM 'Message' where ChatMembers like '" + clientName + "&%' or ChatMembers like '%&" + clientName + "' order by CreationDate DESC) group by ChatMembers")

	if err != nil {
		return
	}

	var sender string

	for rows.Next() {
		rows.Scan(&sender)
		senders = append(senders, sender)
	}

	return
}

func (r *ChatRepository) FindByUsers(user1, user2 models.User) (messages []models.Message, err error) {
	query := fmt.Sprintf("SELECT * FROM Message WHERE (Sender LIKE '%s' AND Receiver LIKE '%s') OR (Sender LIKE '%s' AND Receiver LIKE '%s')", user1.Id, user2.Id, user2.Id, user1.Id)
	rows, err := r.store.db.Query(query)
	if err != nil {
		return nil, err
	}
	var message models.Message

	for rows.Next() {
		err := rows.Scan(&message.Id, &message.CreationDate, &message.From.Id, &message.To.Id, &message.Body, &message.ChatMembers)
		if err != nil {
			return nil, err
		}

		message.From, _ = r.store.User().FindById(message.From.Id)
		message.To, _ = r.store.User().FindById(message.To.Id)
		messages = append(messages, message)
	}

	return
}

func (r *ChatRepository) Save(connMsg utils.ConnMessage) error {
	msg, err := r.convertMessage(connMsg)
	if err != nil {
		return err
	}

	_, err = r.store.db.Exec("INSERT INTO Message (Id, CreationDate, Sender, Receiver, Body, ChatMembers) values ($1, $2, $3, $4, $5, $6)", msg.Id, msg.CreationDate, msg.From.Id, msg.To.Id, msg.Body, msg.ChatMembers)
	if err != nil {
		return err
	}

	return nil
}

func (r *ChatRepository) convertMessage(connMsg utils.ConnMessage) (msg models.Message, err error) {
	msg.From, err = r.store.User().FindByName(connMsg.From)
	if err != nil {
		return
	}

	msg.To, err = r.store.User().FindByName(connMsg.To)
	if err != nil {
		return
	}

	msg.Body = connMsg.Msg
	msg.CreationDate = connMsg.CreationDate
	msg.Id = utils.GenerateId()
	msg.ChatMembers = concatMembers(connMsg)
	return
}

func concatMembers(connMsg utils.ConnMessage) string {
	if connMsg.To > connMsg.From {
		return connMsg.To + "&" + connMsg.From
	}

	return connMsg.From + "&" + connMsg.To
}

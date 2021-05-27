package utils

// ConnMessage msg from ws
type ConnMessage struct {
	From         string `json:'From'`
	To           string `json:'To'`
	Msg          string `json:'Msg'`
	Type         string `json:'Type'`
	CreationDate string `json:'CreationDate'`
}

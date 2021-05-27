package utils

import "strings"

// ValidURL if count '/' in url is more than expected returns false
func ValidURL(url string, count int) bool {
	if strings.Count(url, "/") > count {
		return false
	}
	return true
}

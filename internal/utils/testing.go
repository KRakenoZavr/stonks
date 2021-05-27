package utils

import "testing"

func Assert(t *testing.T, fail bool) func(bool, ...interface{}) {
	if fail {
		return func(expression bool, output ...interface{}) {
			if !expression {
				t.Fatal(output)
			}
		}
	} else {
		return func(expression bool, output ...interface{}) {
			if !expression {
				t.Log(output)
			}
		}
	}
}

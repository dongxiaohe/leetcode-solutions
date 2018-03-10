package main;

import "fmt";
import "strings";

type Result struct {
	previous string
	current string
}

func main() {
	fmt.Println(longestStr("abcabcbb"))
	fmt.Println(longestStr("bbbbb"))
	fmt.Println(longestStr("pwwkew"))
}

func longestStr(str string ) string {
	strArr := strings.Split(str, "")
	result := Result { "", "" }
	for _, ele := range strArr {
		if strings.Contains(result.current, ele) {
			if len(result.current) > len(result.previous) {
				result.previous = result.current
			}
		    result.current = ele
		} else {
			result.current += ele
		}
	}
	if len(result.current) > len(result.previous) {
		return result.current
	}
	return result.previous
}

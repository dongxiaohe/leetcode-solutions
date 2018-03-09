package main;

import "fmt";

type LinkedNode struct {
	val int
	next *LinkedNode
} 

func main() {
	l1_3 := LinkedNode{3, nil}
	l1_2 := LinkedNode{4, &l1_3}
	l1_1 := LinkedNode{2, &l1_2}

	l2_3 := LinkedNode{4, nil}
	l2_2 := LinkedNode{6, &l2_3}
	l2_1 := LinkedNode{5, &l2_2}

	addTwoNumbers(&l1_1, &l2_1)
}

func iterate(l1 *LinkedNode, l2 *LinkedNode, l3 *LinkedNode, isRound int) *LinkedNode {
	if (l1 != nil && l2 != nil) {
		var l1Val int
		if l1Val = 0; l1 != nil {
			l1Val = l1.val
		}
		var l2Val int
		if l2Val = 0; l2 != nil {
			l2Val = l2.val
		}
		total := l1Val + l2Val + isRound
		l3.val = total % 10
		if (l1 != nil && l1.next != nil) || (l2 != nil && l2.next != nil) {
			l3.next = &LinkedNode {}
			if l1 == nil {
				iterate(nil, l2.next, l3.next, total / 10)
			} else if l2 == nil {
				iterate(l1.next, nil, l3.next, total / 10)
			} else {
				iterate(l1.next, l2.next, l3.next, total / 10)
			}
		}
	}
	return l3
}
func addTwoNumbers(l1 *LinkedNode, l2 *LinkedNode) {
    result := iterate(l1, l2, &LinkedNode {}, 0)
	for result != nil {
		fmt.Println(result.val)
		result = result.next
	}
}


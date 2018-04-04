const ListNode = (val, next = null) => {
	return { val, next };
}

const removeNthFromTheEnd = (head, n) => {
	let fast = head;
	let slow = head;

	for(let i = 0; i < n; i++) {
		fast = fast.next;
	}

	while(fast.next) {
		fast = fast.next;
		slow = slow.next;
	}
	slow.next = slow.next.next;

	return head;	
}

const fifth = ListNode(5, null);
const fourth = ListNode(4, fifth);
const third = ListNode(3, fourth);
const second = ListNode(2, third);
const first = ListNode(1, second);

removeNthFromTheEnd(first, 2);

let tmp = first;
while(tmp) {
	console.log(tmp.val);
	tmp = tmp.next;
}

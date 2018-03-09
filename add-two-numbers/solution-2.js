const linkedNode = (val, next) => {
    return { val, next };
}

const addTwoNumbers = (l1, l2) => {
	const iterate = (l1, l2, acc, addOne = 0) => {
		if (l1 || l2) {
			const l1Val = l1 ? l1.val : 0;	
			const l2Val = l2 ? l2.val : 0;	
			const total = l1Val + l2Val + addOne;
			acc.val = total % 10;
			if ((l1 && l1.next) || (l2 && l2.next)) {
				acc.next = linkedNode();
				iterate(l1 ? l1.next : null, l2 ? l2.next : null, acc.next, Math.floor(total / 10));
			} 				
		} 
	}
	let result = linkedNode();
	iterate(l1, l2, result);

//	while(result) {
//		console.log(result.val);
//		result = result.next;
//	}
	return result;
}

const l1_3 = linkedNode(3);
const l1_2 = linkedNode(4, l1_3);
const l1_1 = linkedNode(2, l1_2);

const l2_3 = linkedNode(4);
const l2_2 = linkedNode(6, l2_3);
const l2_1 = linkedNode(5, l2_2);

console.log(addTwoNumbers(l1_1, l2_1));

const l3_1 = linkedNode(7);

const l4_3 = linkedNode(3);
const l4_2 = linkedNode(3, l4_3);
const l4_1 = linkedNode(3, l4_2);

console.log(addTwoNumbers(l3_1, l4_1));

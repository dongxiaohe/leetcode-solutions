const linkedNode = (val, next) => {
    return { val, next };
}

const toNumber = (node) => {
    let result = "";
    while (node) {
       result = node.val + result;
       node = node.next;
    }
    return parseInt(result);
}

const addTwoNumbers = (l1, l2) => {
    return toNumber(l1) + toNumber(l2);
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

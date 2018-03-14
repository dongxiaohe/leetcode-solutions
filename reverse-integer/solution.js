const reverseNumber = number => {
	if (number < 0) {
		return 0 - reverse(Math.abs(number));
	}
	return reverse(number);
}

const reverse = number => {
	const str = number + "";
	const strArr = str.split("");
	const len = strArr.length;
	let result = "";
	
	for (let j = len - 1; j >= 0; j --) {
		result += strArr[j];
	}

	return parseInt(result);
}

console.log(reverseNumber(123));
console.log(reverseNumber(-123));
console.log(reverseNumber(120));

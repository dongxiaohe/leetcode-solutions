const zigZag = (str, rows) => {
	const maxCount = 2 * rows - 2;
	if (maxCount <= 0) return "";
	const distance = rows - 1;	
	const strArr = str.split("");
	const len = strArr.length;
	let result = "";
	for (let i = 0; i < rows; i ++) {
		if (i == 0 || i == rows - 1) {
			result += getStrInOneRow(strArr, i, maxCount);
		} else {
			result += getStrInOneRow(strArr, i, distance);
		}
	}
	return result;
}

const getStrInOneRow = (strArr, start, distance) => {
	let result = "";
	const len = strArr.length;
	do {
		result += strArr[start];
		start += distance;
	} while (start < len);

	return result;
}

console.log(zigZag("PAYPALISHIRING", 3));
console.log(zigZag("1234567890123", 4));

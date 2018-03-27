const threeSum = arr => {
	const sortedArr = arr.sort();
	const len = sortedArr.length;
	let result = [];
	for( let i = 0; i < len; i++ ) {
		const ele = sortedArr[i];
		let left = i + 1;
		let right = len - 1;

		while(left < right) {
			const total = sortedArr[left] + sortedArr[right] + ele;
			if (total === 0) {
				result.push([ele, sortedArr[left], sortedArr[right]]);
				break;
			} else if (total < 0) {
				left++;
			} else {
				right--;
			}
		}
	} 

	return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([]));

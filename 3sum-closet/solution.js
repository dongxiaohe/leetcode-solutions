const threeSumCloset = (nums, target) => {
	const sortedNums = nums.sort((a, b) => a - b);
	const len = sortedNums.length;
	let result = null;
	
	for (let i = 0; i < len; i++ ) {
		let j = i + 1;
		let k = len - 1;
		while (j < k) {
			const total = sortedNums[i] + sortedNums[j] + sortedNums[k];
			if (total === target) return target;
			if (!result) {
				result = total;
				continue;
			}
			if (Math.abs(total - target) < Math.abs(result - target)) {
				result = total;
			}
			if (total > target) {
				k--;
			} else {
				j++;
			}
		}
	}	
	return result;
}

console.log(threeSumCloset([-1, 2, 1, -4], 1));
console.log(threeSumCloset([-1, 2, 1, -4], -3));

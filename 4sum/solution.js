const fourSum = (nums, target) => {
	const sortedNums = nums.sort((a, b) => a - b);
	const len = sortedNums.length;
	let result = [];
	
	if(len < 4) return [];

	for(let i = 0; i < len - 3; i++) {
		if (sortedNums[i+1] && sortedNums[i+1] === sortedNums[i]) continue;
		for (let j = i + 1; j < len - 2; j++) {
			if (sortedNums[j+1] && sortedNums[j+1] === sortedNums[j]) continue;
			let m = j + 1;
			let n = len - 1;
			while(m < n) {
				if (sortedNums[m+1] && sortedNums[m+1] === sortedNums[m]) {
					m++;
					continue;
				}
				const total = sortedNums[i] + sortedNums[j] + sortedNums[m] + sortedNums[n];
				if (total === target) {
					result.push([sortedNums[i],  sortedNums[j], sortedNums[m], sortedNums[n]]);
					m++;
				} else if (total < target) {
					m++;
				} else {
					n--;
				}
			}
		}
	}
	return result;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

const threeSumCloset = (nums, target) => {
	const sortedNums = nums.sort((a, b) => a - b);
	const len = sortedNums.length;
	let result = {
		closet: null, 
		distance: null
	};

	for (let i = 0; i < len; i++) {
		let j = i + 1;
		let end = len - 1;

		while(j < end) {
				let tmpTotal = sortedNums[i] + sortedNums[j] + sortedNums[end];
				let tmpDistance = target - tmpTotal;
				if (tmpDistance === target) {
					return [sortedNums[i], sortedNums[j], sortedNums[end]];
				}
				if (!result.closet) {
					result.closet = [sortedNums[i], sortedNums[j], sortedNums[end]];
					result.distance = tmpDistance; 
					continue;
				} 
				if (Math.abs(tmpDistance) < result.distance) {
					result.closet = [sortedNums[i], sortedNums[j], sortedNums[end]];
					result.distance = Math.abs(tmpDistance);
				} 
				if (result.distance < 0) {
					j++;		
				} else {
					end--;
				}
		}
	}
	return result.closet;
}

console.log(threeSumCloset([-1, 2, 1, -4], 1));
console.log(threeSumCloset([-1, 2, 1, -4], -3));

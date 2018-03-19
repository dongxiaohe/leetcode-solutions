const maxArea = heights => {
	if (!heights) return null;
	const len = heights.length;
	let i = 0;
	let j = len - 1;
	let max = area(i, j, heights);
	while (i < j) {

		let tmp = area(i, j, heights);
		max = max.value < tmp.value ? tmp : max;
		if (heights[i] < heights[j]) {
			i++;
		} else {
			j--;
		}		
	}	
	return max;
};

const area = (x, y, heights) => {
	const xVal = heights[x];
	const yVal = heights[y];
	const min = xVal < yVal ? xVal : yVal
	const value = min * (y - x);

	return { x, y, value };
};

console.log(maxArea([1,3,2,4])); 
console.log(maxArea([1,2,3,4])); 
console.log(maxArea([1,6,7,3])); 
console.log(maxArea([1,7,6,1]));
console.log(maxArea([1,7,2,1]));


const maxProfit = prices => {
	let result = 0;
	const len = prices.length;
	let i = len - 1, j = len - 2;
	let profit = 0;
	let tmpProfit;
	while (i >= 0) {
		tmpProfit = prices[i] - prices[j];
		if (tmpProfit <= 0) {
			result += profit;
			if (j === 0) {
				return result;
			}
			profit = 0;
			i = j;
		} else if (tmpProfit > profit) {
			profit = tmpProfit;
		} else {
			result += profit;
			profit = 0;
			i = j;
		}
		if (j === 0) {
			result += profit;
			return result;	
		}
 		j --;
	}
	return result;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([6,1,3,2,4,7]));
console.log(maxProfit([1,4,2]));



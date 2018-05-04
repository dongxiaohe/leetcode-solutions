const maxProfit = prices => {
	let result = 0;
	const len = prices.length;
	let i = len - 1, j = len - 2;
	let profit = 0;
	while (i >= 0) {
		//console.log(prices[i], prices[j]);
		if (prices[i] <= prices[j]) {
			result += profit;
			if (j === 0) {
				return result;
			}
			profit = 0;
			i = j;
		} else if ((prices[i] - prices[j]) > profit) {
			profit = prices[i] - prices[j];
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



const letterCombinations = digits => {
	const letters = {
		"1": "*",
		"2": "abc",
		"3": "def",
		"4": "ghi",
		"5": "jkl",
		"6": "mno",
		"7": "pqrs",
		"8": "tuv",
		"9": "wxyz",
		"0": " ",
	};
	const digitsArr = ("" + digits).split("").map(t => parseInt(t));
	const len = digitsArr.length;

	let result = [];	
	for(let i = 0; i < len; i++) {
		let characters = letters[digitsArr[i]].split("");
		if (i === 0) {
			result = characters.reduce((a, b) => { a.push(b); return a;}, []);
		} else {
			let tmp = [];
			for(ele of result) {
				for(added of characters) {
					tmp.push(ele + added);
				}
			}
			result = tmp;
		}
	}
	
	return result;
}

console.log(letterCombinations("123")); 
console.log(letterCombinations("67")); 
console.log(letterCombinations("1234").length); 

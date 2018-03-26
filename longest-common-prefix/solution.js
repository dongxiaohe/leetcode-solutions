const longestCommonPrefix = strArr => {
	const strLen = strArr.length;
	if (strLen === 0) return "";

	let result = "";
	const firstLen = strArr[0].split("").length;
	for (let i = 0; i< firstLen; i ++) {
		let character = strArr[0].split("")[i]; 
		for (let j = 1; j < strLen; j ++ ) {
			if (strArr[j].split("")[i] != character) {
				return result;	
			}
			if (strArr[j].split("")[i] === character && j === strLen - 1) {
				result += character;	
			} 
		}
	}
	return result;	
};

console.log(longestCommonPrefix(["", "", ""]));
console.log(longestCommonPrefix(["123", "qwe", "asd"]));
console.log(longestCommonPrefix(["abc1", "abc2", "abc3"]));
console.log(longestCommonPrefix(["", "abc2", "abc3"]));
console.log(longestCommonPrefix(["abc1234567", "abc2", "abc3"]));

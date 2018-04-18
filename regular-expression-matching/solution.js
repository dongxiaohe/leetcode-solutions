const isMatch = (str, pattern) => {
	const patternArray = pattern.split("");
	const strArray = str.split("");
	const strLen = strArray.length;
	const patternLen = patternArray.length;
	let i = 0;
	let j = 0;	
	let startCheck = false;

	while ( i < strLen ) {
		let text = strArray[i];
		let p = patternArray[j];
		if (j == patternLen && i <= strLen - 1) return false;

		if (p != "." && p != text) {
			j = j + 1;
		} else {
			if (pattern[j + 1] == "*") {
				j = j + 2;
				do {
					i = i + 1;
				} while (strArray[i] == text)
			} else {
				j = j + 1;
				i = i + 1;
			}
		}
	}
	return true;
}

console.log(isMatch("aa","a"));
console.log(isMatch("aa","aa"));
console.log(isMatch("aaa","aa"));
console.log(isMatch("aa", "a*"));
console.log(isMatch("aa", ".*"));
console.log(isMatch("ab", ".*"));
console.log(isMatch("aab", "c*a*b"));

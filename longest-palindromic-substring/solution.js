const longestPalindromicSubstring = str => {
	const strArr = str.split("");
	const len = strArr.length;

	for (let max = len; max >= 1; max -- ) {
		for (let i = 0; i + max <= len; i ++ ) {
			const maxSubStr = str.substring(i, max);
			if (isPalindromic(maxSubStr)) {
				return maxSubStr;
			}
		}
	}
	return "";
}

const isPalindromic = str => {
	const strArr = str.split("");
	const len = strArr.length;
	const mid = Math.round(len / 2);

	for (let i = 0; i <= mid; i ++ ) {
		if (strArr[i] != strArr[len - 1 - i]) {
			return false;
		}
	}
	return true;
}

console.log(longestPalindromicSubstring("babad"));
console.log(longestPalindromicSubstring("cbbd"));
console.log(longestPalindromicSubstring("c"));
console.log(longestPalindromicSubstring("ahdfjabcbasdfkj"));


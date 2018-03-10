const take = str => {
	const longestLengthStr = (strArr, acc) => {
		if (strArr.length == 0) return;
		const ele = strArr.shift();
		if (acc.current.indexOf(ele) != -1) {
			if (acc.current.length > acc.previous.length) {
				acc.previous = acc.current;
			} 	
			acc.current = ele;
		} else {
			acc.current += ele;
		}
		longestLengthStr(strArr, acc);
	}
	//It is not asked to return multiple longest str. If so, this return type should be changed.
	let result = { previous: "", current: "" };
	longestLengthStr(str.split(""), result);
	return result.previous.length > result.current.length ? result.previous : result.current;
}

console.log(take("abcabcbb"));
console.log(take("bbbbb"));
console.log(take("pwwkew"));

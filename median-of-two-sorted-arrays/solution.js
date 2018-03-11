const medianOfTwoArrays = (a, b) => {
	const findKth = (a, aLen, aOffset, b, bLen, bOffset, k) => {
		if (aLen > bLen) return findKth(b, bLen, bOffset, a, aLen, aOffset, k);
		if (aLen == 0) return b[k-1];
		if (k == 1) return Math.min(a[aOffset], b[bOffset]);

		const pa = Math.min(Math.floor(k/2), aLen);
		const pb = k - pa;

		if (a[aOffset + pa - 1] >= b[bOffset + pb - 1]) 
			return findKth(a, aLen, aOffset, b, bLen - pb, bOffset + pb, k - pb);
		return findKth(a, aLen - pa, aOffset + pa, b, bLen, bOffset, k - pa);
	}

	const aLen = a.length;
	const bLen = b.length;
	const mid = Math.round((aLen + bLen) / 2);

	if ((aLen + bLen) % 2 == 0)
		return (findKth(a, aLen, 0, b, bLen, 0, mid) + findKth(a, aLen, 0, b, bLen, 0, mid + 1 )) / 2;
	return findKth(a, aLen, 0, b, bLen, 0, mid);
};

console.log(medianOfTwoArrays([1, 7], [3])); 
console.log(medianOfTwoArrays([1, 2], [3, 4])); 

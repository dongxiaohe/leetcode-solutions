const take = (a, b) => {
	const findKth = (a, aOffset, aLen, b, bOffset, bLen, k) => {
		if (aLen > bLen) return findKth(b, bOffset, bLen, a, aOffset, aLen, k);	
		if (aLen == 0) return b[k-1];
		if (k == 1) return Math.min(a[aOffset], b[bOffset]);
		const pa = Math.min(k/2, aLen);
		const pb = k - pa;
		if (a[aOffset + pa -1 ] >= b[bOffset + pb -1 ] ) 
			return findKth(a, aOffset, aLen, b, bOffset + pb, bLen - pb, k - pb);
		else return findKth(a, aOffset + pa, aLen - pa, b, bOffset, bLen, k - pa);
	}
	const aLen = a.length;
	const bLen = b.length;
	const mid = Math.round((aLen + bLen) / 2);
	if ((aLen + bLen) % 2 == 0 ) {
		return (findKth(a, 0, aLen, b, 0, bLen, mid) + findKth(a, 0, aLen, b, 0, bLen, mid + 1)) / 2;
	}
	return findKth(a, 0, aLen, b, 0, bLen, mid);
}

console.log(take([1, 7], [3])); 
console.log(take([1, 2], [3, 4])); 


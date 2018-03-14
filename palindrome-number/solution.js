const isPalindrome = number => {
	if (number < 0 || (number != 0 && Math.floor(number % 10) == 0)) return false;
	let reversedNumber = 0;	

	while (number > reversedNumber) {
		reversedNumber = reversedNumber * 10 + Math.floor(number % 10);
		number = Math.floor(number / 10);
	}
	
	return number == reversedNumber || (Math.floor(reversedNumber / 10) == number);
}

console.log(isPalindrome(121));
console.log(isPalindrome(1221));
console.log(isPalindrome(12321));
console.log(isPalindrome(123));
console.log(isPalindrome(-123));
console.log(isPalindrome(-12321));


//function that will check string if ("madam") <= same pattern will give true

function isPalindrom(word) {
	let head = '';
	let tail = '';
	let counter = 0;
	let isPalindromFlag = false;
	while (counter < word.length / 2) {
		head = word[counter];
		tail = word[word.length - 1 - counter];

		if (head === tail) {
			isPalindromFlag = true;
		} else {
			return (isPalindromFlag = false);
		}
		counter++;
	}
	return isPalindromFlag;
}
const val = isPalindrom('madam');
console.log(val);

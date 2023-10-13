function getVowelLetters() {
	return ['a', 'o', 'i', 'u', 'e'];
}

function getLowerCaseString(stringValue) {
	return stringValue.toLowerCase();
}

function countVowels(stringValue) {
	const vowels = getVowelLetters();
	let lowerCasedWord = getLowerCaseString(stringValue);
	let count = 0;
	for (let i = 0; i < lowerCasedWord.length; i++) {
		vowels.map((vowel) => {
			vowel === lowerCasedWord[i] ? count++ : '';
		});
	}
	return count;
}

console.log(countVowels('youssef'));

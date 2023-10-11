// function ("HeLlo" , "L") ==> 2

function countComparedLetter(word, letter) {
	const letterForComparing = getLowerCasedLetters(letter);
	const wordForComparing = getWordArray(word);

	return compareWordWithLetter(wordForComparing, letterForComparing);
}

function getWordArray(word) {
	return getLowerCasedLetters(word).split('');
}

function getLowerCasedLetters(letter) {
	return letter.toLowerCase();
}

function compareWordWithLetter(wordArray, letter) {
	let count = 0;
	for (let index = 0; index < wordArray.length; index++) {
		if (letter === wordArray[index]) {
			count++;
		}
	}
	return count;
}

const countedLetters = countComparedLetter('heLLo', 'O');
console.log(countedLetters);

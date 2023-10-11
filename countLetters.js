// function ("HeLlo" , "L") ==> 2

function countComparedLetter(word, letter) {
	const wordArray = word.toLowerCase().split('');
	const lowerCaseLetter = letter.toLowerCase();

	let count = 0;
	for (let index = 0; index < wordArray.length; index++) {
		if (lowerCaseLetter === wordArray[index]) {
			count++;
		}
	}

	return count;
}

const countedLetters = countComparedLetter('heLLo', 'O');
console.log(countedLetters);

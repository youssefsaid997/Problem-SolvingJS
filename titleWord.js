//function should return Title Case values
//function("hELlo wORlD") => Hello World

function getWordsFromSentence(sentence) {
	return sentence.toLowerCase().split(' ');
}

function capitalizeFirstLetter(word) {
	const firstLetter = word[0].toUpperCase();
	return firstLetter + word.slice(1);
}

function capitalizeWordsInArray(array) {
	return array.map((word) => {
		return capitalizeFirstLetter(word);
	});
}

function getTitleCase(sentence) {
	const wordsFromSentence = getWordsFromSentence(sentence);
	return capitalizeWordsInArray(wordsFromSentence).join(' ');
}
console.log(getTitleCase('hello my name is youssef'));

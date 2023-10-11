function doDeepCopy(value) {
	return JSON.parse(JSON.stringify(value));
}
function convertStringToArray(stringValue) {
	return stringValue.split('');
}

function reverseValuesInArray(values) {
	return doDeepCopy(values).reverse();
}

function reverseString(stringValue) {
	const covertedStringToArray = convertStringToArray(stringValue);
	return reverseValuesInArray(covertedStringToArray).join('');
}

//another solution you can use in low level languages
function reverseByLooping(word) {
	let reversedWord = '';
	for (let i = word.length - 1; i >= 0; i--) {
		reversedWord += word[i];
	}
	return reversedWord;
}
console.log(reverseString('hello my name is youssef'));
console.log(reverseByLooping('hello my name is youssef'));

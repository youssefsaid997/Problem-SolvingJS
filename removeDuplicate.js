//[1,2,4,4,4,5,5,2,2,1,1] => [1,2,4,5]

function removeDuplicates(arr) {
	let newArray = [];
	pushOriginalElementToArray(arr, newArray);
	return newArray;
}

function pushOriginalElementToArray(oldArray, newArray) {
	for (let i = 0; i < oldArray.length; i++) {
		let index = findValue(oldArray[i], oldArray);
		if (isDuplicate(index, i)) {
			newArray.push(oldArray[index]);
		}
	}
	return newArray;
}

function isDuplicate(originIndex, elementIndex) {
	return originIndex === elementIndex;
}

function findValue(value, arr) {
	return arr.indexOf(value);
}

console.log(
	removeDuplicates([1, 2, 2, 4, '5', '5', 6, 6, 6, true, 6, 6, 6, 7, true])
);
// console.log(findValue(2, [1, 2, 2, 4, 5, 5, 6, 6, 6, 6, 6, 6, 7]));

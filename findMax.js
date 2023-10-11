//low level solution
// function findMaxNumber(arrayOfNumbers) {
// 	let max = arrayOfNumbers[0];
// 	for (let i = 0; i < arrayOfNumbers.length; i++) {
// 		if (arrayOfNumbers[i] > max) {
// 			max = arrayOfNumbers[i];
// 		}
// 	}
// 	return max;
// }

//js solution

function findMaxNumber(arrayOfNumbers) {
	return Math.max(...arrayOfNumbers);
}

const maxNumber = findMaxNumber([1, 5, 10, 100, 2, 300]);

console.log(maxNumber);

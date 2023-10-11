function calculator(firstNum, secondNum, operator) {
	return doMathProcedure(firstNum, secondNum, operator);
}

function doMathProcedure(firstNum, secondNum, operator) {
	let res;
	switch (operator) {
		case '+':
			res = firstNum + secondNum;
			break;
		case '-':
			res = firstNum - secondNum;
			break;
		case '/':
			res = firstNum / secondNum;
			break;
		case '*':
			res = firstNum * secondNum;
			break;
		default:
			throw Error('You should use arithmetic operator');
	}

	return res;
}

const result = calculator(5, 9, '+');

console.log(result);

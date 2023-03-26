function performOperation(firstValue, operator, secondValue) {
	switch (operator) {
		case "/":
			return Number(firstValue) / Number(secondValue);
		case "X":
			return Number(firstValue) * Number(secondValue);
		case "+":
			return Number(firstValue) + Number(secondValue);
		case "-":
			return Number(firstValue) - Number(secondValue);
		default:
			throw new Error("Unknown operaton");
	}
}

function removeOperator(exp, operator) {
	const expArray = exp.split(" ");
	// console.log("expArray", expArray);
	const answerArray = [];
	for (let i = 0; i < expArray.length; i++) {
		if (expArray[i] === operator) {
			answerArray.pop();
			answerArray.push(
				performOperation(expArray[i - 1], operator, expArray[i + 1])
			);
			i++;
		} else {
			answerArray.push(expArray[i]);
		}
	}
	// console.log(answerArray);

	return answerArray.join(" ");
}

function findClosingBracket(exp, startingIndex) {
	let countOfOpenBrackets = 0;
	for (let i = startingIndex; i < exp.length; i++) {
		if (exp[i] === "(") countOfOpenBrackets++;
		else if (exp[i] === ")") {
			countOfOpenBrackets--;
			if (countOfOpenBrackets === 0) return i;
		}
	}
	return -1;
}

function evaluateBracket(exp) {
	let expClone = exp;
	// console.log(expClone);
	expClone = removeOperator(expClone, "/");
	// console.log(expClone);
	expClone = removeOperator(expClone, "X");
	// console.log(expClone);
	expClone = removeOperator(expClone, "+");
	// console.log(expClone);
	expClone = removeOperator(expClone, "-");
	// console.log(expClone);
	return expClone;
}

function isValidExpression(exp) {
	if (exp.length === 0) return false;
	let countBrackets = 0;
	for (let i = 0; i < exp.length; i++) {
		if (exp[i] === "(") countBrackets++;
		else if (exp[i] === ")") {
			countBrackets--;
		}
	}
	if (countBrackets === 0) return true;
	return false;
}

function evaluate(exp) {
	if (!isValidExpression(exp)) return "";

	const outermostBracketStartsAt = exp.indexOf("(");
	const outermostBracketEndsAt = findClosingBracket(
		exp,
		outermostBracketStartsAt
	);

	// const outermostBracketEndsAt = exp.lastIndexOf(")");
	console.log(exp);

	let expWithoutBracket = exp;
	if (outermostBracketStartsAt !== -1) {
		expWithoutBracket =
			(exp.slice(0, outermostBracketStartsAt) ?? "") +
			evaluate(
				exp.slice(outermostBracketStartsAt + 1, outermostBracketEndsAt)
			) +
			" " +
			(exp[outermostBracketEndsAt + 2] ?? "") +
			" " +
			evaluate(exp.slice(outermostBracketEndsAt + 4) ?? "");
	}
	return evaluateBracket(expWithoutBracket);
}

export { evaluate };

// 1 + 9 - 2 X (1 X 3) X (1 + 2)

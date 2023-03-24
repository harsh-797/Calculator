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
	console.log("expArray", expArray);
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

function evaluate(exp, initial) {
	console.log(typeof exp);
	if (exp.length === 0) return 0;

	const outermostBracketStartsAt = exp.indexOf("(");
	const outermostBracketEndsAt = exp.lastIndexOf(")");

	let expWithoutBracket = exp;
	if (outermostBracketStartsAt !== -1) {
		expWithoutBracket =
			exp.slice(0, outermostBracketStartsAt) +
			evaluate(
				exp.slice(outermostBracketStartsAt + 1, outermostBracketEndsAt)
			) +
			exp.slice(outermostBracketEndsAt + 1);
	}
	return evaluateBracket(expWithoutBracket);
}

export { evaluate };

import React from "react";

import Body from "./Body";
import Screen from "./Screen";
import { evaluate } from "../utils";
import { useExpression } from "../hooks";

export default function Calculator() {
	const { expression, answer, handleOperation } = useExpression();

	// to avoid invalid expression like '3 - 6 * '
	if (expression[expression.length - 1] !== " ")
		answer.current = evaluate(expression);

	return (
		<div className='calculator'>
			<Screen expression={expression} answer={answer.current} />
			<Body handleOperation={handleOperation} />
		</div>
	);
}

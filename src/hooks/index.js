import React from "react";

function isOperand(key) {
	if (key === "+" || key === "-" || key === "/" || key === "X") return true;
	return false;
}

function useExpression() {
	const [expression, setExpression] = React.useState("");

	const answer = React.useRef(null);

	const handleOperation = React.useCallback((type, value) => {
		switch (type) {
			case "operation":
				setExpression((c) => c + value);
				return;
			case "clear":
				setExpression((c) => "");
				return;
			case "equals":
				setExpression("" + answer.current);
				return;
			default:
				throw new Error("What was that !!!");
		}
	}, []);

	React.useEffect(() => {
		window.addEventListener("keypress", (e) => {
			e.preventDefault();
			console.log(e);
			if (e.key === "=" || e.key === "Enter") {
				console.log("hi");
				handleOperation("equals");
			} else if (isOperand(e.key)) {
				handleOperation("operation", " " + e.key + " ");
			} else if (e.key === "") {
			} else {
				handleOperation("operation", e.key);
			}
		});
	}, [handleOperation]);

	return { expression, setExpression, answer, handleOperation };
}

export { useExpression };

import React from "react";

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
			if (e.key === "=") {
				handleOperation("equals");
			} else if (e.key === "") {
			} else {
				handleOperation("operation", e.key);
			}
		});
	}, [handleOperation]);

	return { expression, setExpression, answer, handleOperation };
}

export { useExpression };

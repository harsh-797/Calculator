import Button from "./Button";

export default function Brackets({ handleOperation }) {
	return (
		<>
			<Button
				classList={"button opening-bracket"}
				onClick={() => handleOperation("operation", "(")}>
				(
			</Button>

			<Button
				classList={"button closing-bracket"}
				onClick={() => handleOperation("operation", ")")}>
				)
			</Button>
		</>
	);
}

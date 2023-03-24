import Button from "./Button";

export default function Clear({ handleOperation }) {
	return (
		<Button classList={"button clear"} onClick={() => handleOperation("clear")}>
			C
		</Button>
	);
}

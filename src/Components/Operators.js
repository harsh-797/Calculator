import Button from "./Button";

export default function Operators({ handleOperation }) {
	return (
		<>
			<Button
				classList={"button add"}
				onClick={() => {
					console.log("i run once");
					handleOperation("operation", " + ");
				}}>
				+
			</Button>
			<Button
				classList={"button subtract"}
				onClick={() => handleOperation("operation", " - ")}>
				-
			</Button>
			<Button
				classList={"button multiply"}
				onClick={() => handleOperation("operation", " X ")}>
				X
			</Button>
			<Button
				classList={"button divide"}
				onClick={() => handleOperation("operation", " / ")}>
				/
			</Button>
			<Button
				classList={"button equals"}
				onClick={() => handleOperation("equals")}>
				=
			</Button>
		</>
	);
}

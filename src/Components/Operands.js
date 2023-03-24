import Button from "./Button";

export default function Operands({ handleOperation }) {
	const oneToNineArray = Array(9)
		.fill(null)
		.map((e, i) => i + 1);

	return (
		<>
			{oneToNineArray.map((e, i) => (
				<Button
					key={i}
					classList={"button"}
					onClick={() => handleOperation("operation", e)}>
					{e}
				</Button>
			))}
			<Button
				classList={"button"}
				onClick={() => handleOperation("operation", ".")}>
				.
			</Button>
			<Button
				classList={"button"}
				onClick={() => handleOperation("operation", "0")}>
				0
			</Button>
		</>
	);
}

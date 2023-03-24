import Answer from "./Answer";
import Computation from "./Computation";

export default function Screen({ expression, answer }) {
	return (
		<div className='screen'>
			<Answer answer={answer} />
			<Computation expression={expression} />
		</div>
	);
}

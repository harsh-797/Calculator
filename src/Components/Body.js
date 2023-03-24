import React, { Fragment } from "react";
import Brackets from "./Brackets";
import Clear from "./Clear";
import Operands from "./Operands";
import Operators from "./Operators";

function Body({ handleOperation }) {
	return (
		// <div>
		<Fragment>
			<Brackets handleOperation={handleOperation} />
			<Clear handleOperation={handleOperation} />
			<Operands handleOperation={handleOperation} />
			<Operators handleOperation={handleOperation} />
		</Fragment>
		// </div>
	);
}

export default React.memo(Body);

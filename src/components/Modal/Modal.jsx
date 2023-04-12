import React from "react";

import "./Modal.scss";

const modal = (props) => {
	const cssClasses = ["modal", props.show ? "open" : "closed"];

	return (
		<div className={cssClasses.join(" ")}>
			<h1>A Modal</h1>
			<button className="Button" onClick={props.closed}>
				Dismiss
			</button>
		</div>
	);
};

export default modal;

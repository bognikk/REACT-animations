import React from "react";

import "./Modal.scss";

const modal = (props) => (
	<div className="Modal">
		<h1>A Modal</h1>
		<button className="Button" onClick={props.closed}>
			Dismiss
		</button>
	</div>
);

export default modal;

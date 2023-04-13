import React from "react";
import { Transition } from "react-transition-group";

import "./Modal.scss";

const modal = (props) => {
	return (
		<Transition in={props.show} timeout={300} mountOnEnter unmountOnExit>
			{(state) => {
				const cssClasses = [
					"modal",
					state === "entering" ? "open" : state === "exiting" ? "closed" : null,
				];
				return (
					<div className={cssClasses.join(" ")}>
						<h1>A Modal</h1>
						<button className="Button" onClick={props.closed}>
							Dismiss
						</button>
					</div>
				);
			}}
		</Transition>
	);
};

export default modal;

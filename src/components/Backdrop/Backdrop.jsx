import React from "react";

import "./Backdrop.scss";

const backdrop = (props) => {
	const cssClasses = ["backdrop", props.show ? "open" : "closed"];

	return <div className={cssClasses.join(" ")}></div>;
};

export default backdrop;

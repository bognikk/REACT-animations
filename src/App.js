import React, { Component, useState } from "react";

import "./App.scss";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

function App() {
	const [showModal, setShowModal] = useState(false);

	const showModalHandler = () => {
		setShowModal(true);
	};

	const closeModalHandler = () => {
		setShowModal(false);
	};

	return (
		<div className="App">
			<h1>React Animations</h1>
			<Modal show={showModal} closed={closeModalHandler} />
			<Backdrop show={showModal} />
			<button className="Button" onClick={showModalHandler}>
				Open Modal
			</button>
			<h3>Animating Lists</h3>
			<List />
		</div>
	);
}

export default App;

import React, { Component, useState } from "react";

import "./App.scss";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from "react-transition-group";

function App() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [showBlock, setShowBlock] = useState(false);

	const showModalHandler = () => {
		setModalIsOpen(true);
	};

	const closeModalHandler = () => {
		setModalIsOpen(false);
	};

	return (
		<div className="App">
			<h1>React Animations</h1>
			<button className="Button" onClick={() => setShowBlock(!showBlock)}>
				Toggle
			</button>
			<br />
			<Transition in={showBlock} timeout={1000} mountOnEnter unmountOnExit>
				{(state) => (
					<div
						style={{
							backgroundColor: "red",
							width: 100,
							height: 100,
							margin: "auto",
							transition: "opacity 1s ease-out",
							opacity: state === "exiting" ? 0 : 1,
						}}
					></div>
				)}
			</Transition>
			<Modal show={modalIsOpen} closed={closeModalHandler} />
			{modalIsOpen ? <Backdrop show /> : null}
			<button className="Button" onClick={showModalHandler}>
				Open Modal
			</button>
			<h3>Animating Lists</h3>
			<List />
		</div>
	);
}

export default App;

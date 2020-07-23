import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from '../Contexts/ModalContext';

export default function ProjectModal(props) {
	const { setModalState } = useContext(ModalContext)	

	// const _closeModal = () => {
	// 	setModalState({showModal: false})h
	// };
	const _closeModal = () => {
		setModalState({showModal: false})
		console.log("Open modal clicked!")
	};	

	return ReactDOM.createPortal(
		<div className="z-10 p-t-64 fixed flex flex-col sm:flex-row rounded-lg w-8/12 bg-white ">
			<div className="left flex flex-col">
				<img src={ props.image1 } alt="project img" className="rounded mx-5 mt-5"/>
				<img src={ props.image2 } alt="project img" className="rounded m-5 mb-5"/>
			</div>
			<div className="right p-10">
				<h1 className="font-bold text-3xl montserrat">{ props.projectName }</h1>
				<h3 className="text-xl montserrat font-bold mt-6">Project Description:</h3>
				<p>{ props.description }</p>

				<h3 className="text-xl montserrat font-bold mt-6">What I learned:</h3>
				<p>{ props.learned }</p>
			</div>
			<span className="close float-right font-bold text-gray-700 text-2xl mt-2 mr-6 cursor-pointer hover:text-black" onClick={_closeModal}>&times;</span>
		</div>,
		document.getElementById("modal-root")
	);
}
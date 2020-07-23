import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from '../Contexts/ModalContext';

export default function ProjectModal(props) {
	const { setModalState } = useContext(ModalContext)	

	const _closeModal = () => {
		setModalState({showModal: false})
	};

	// close modal on outside click
	window.onclick = (e) => {
		let modal = document.querySelector(".modal-bg")
		if(e.target === modal) {
			_closeModal()
		}
	}
	
	// Creation of a portal to add the modal on top of root (where the main app is being render)
	return ReactDOM.createPortal(
		<div className="modal-bg z-10 fixed flex flex-col sm:flex-row pt-32 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-50">
			<div className="bg-white m-auto p-5 sm:p-10 sm:w-2/3 rounded-lg">
				<span className="close float-right font-bold text-gray-700 text-2xl cursor-pointer hover:text-black" onClick={_closeModal}>&times;</span>
				<div className="p-5 sm:p-10">
					<h1 className="font-bold text-3xl montserrat">{ props.projectName }</h1>
					<h3 className="text-xl montserrat font-bold mt-6">Technologies Used:</h3>
					<p>{ props.technologies}</p>
					<h3 className="text-xl montserrat font-bold mt-6">Project Description:</h3>
					<p>{ props.description }</p>
					<h3 className="text-xl montserrat font-bold mt-6">What I learned:</h3>
					<p>{ props.learned }</p>
				</div>
				<div className="flex flex-row justify-center relative pb-2/3 w-full h-auto">
					<img src={ props.image } alt="project img" className="rounded m-5 object-contain"/>
				</div>
			</div>
		</div>,
		// <div className="z-10 p-t-64 fixed flex flex-col sm:flex-row rounded-lg w-8/12 bg-white ">
		// 	<div className="flex flex-col sm:flex-row w-full h-full">
		// 		<div className="left flex flex-col">
		// 			<img src={ props.image1 } alt="project img" className="rounded mx-5 mt-5"/>
		// 			<img src={ props.image2 } alt="project img" className="rounded m-5 mb-5"/>
		// 		</div>
		// 		<div className="right p-10">
		// 			<h1 className="font-bold text-3xl montserrat">{ props.projectName }</h1>
		// 			<h3 className="text-xl montserrat font-bold mt-6">Project Description:</h3>
		// 			<p>{ props.description }</p>

		// 			<h3 className="text-xl montserrat font-bold mt-6">What I learned:</h3>
		// 			<p>{ props.learned }</p>
		// 		</div>
		// 		<span className="close float-right font-bold text-gray-700 text-2xl mt-2 mr-6 cursor-pointer hover:text-black" onClick={_closeModal}>&times;</span>
		// 	</div>
		// </div>,
		document.getElementById("modal-root")
	);
}
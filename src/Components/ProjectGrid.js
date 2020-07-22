import React, {useContext} from 'react';
// sm:bg-green-300 md:bg-green-700
import { ModalContext } from '../Contexts/ModalContext';

import Eye from '../Assets/Imgs/EyeIcon.png';

export default function ProjectGrid(props) {
	
	const {modalState, setModalState} = useContext(ModalContext)

	console.log("MODAL VALUE: ", modalState)

	const _openModal = () => {
		setModalState({showModal: true})
		console.log("Open modal clicked!")
	};

	const _closeModal = () => {
		setModalState({showModal: false})
	};

	return (
		<div className="flex justify-center flex-col items-center">
			<div className="relative project-card flex items-center justify-center">
				<a onClick={_openModal}>
					<img src={ props.image } alt="project view" className="rounded h-56 sm:h-64 hover:opacity-50 cursor-pointer" />
					<img src={ Eye } alt="view project icon" className="eye-icon absolute hover:block h-7 w-10" />
				</a>
			</div>
			<p className="text-white mt-3">{ props.project_title }</p>
		</div>
	);
}
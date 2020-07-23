import React, {useContext} from 'react';
// sm:bg-green-300 md:bg-green-700
import { ModalContext } from '../Contexts/ModalContext';

// import Eye from '../Assets/Imgs/EyeIcon.png';

export default function ProjectGrid(props) {
	
	const { setModalState } = useContext(ModalContext)
	const { id, onClick } = props;

	const _openModal = () => {
		setModalState({showModal: true})
	};

	function handleClick() {
		onClick(id)
	}

	return (
		<div className="flex justify-center flex-col items-center" onClick={handleClick}>
			<div className="relative project-card pb-2/3" onClick={_openModal}>
				<img src={ props.image } alt="project view" className="rounded h-full w-full object-cover hover:opacity-50 cursor-pointer" />
				{/* <img src={ Eye } alt="view project icon" className="eye-icon absolute hover:block h-7 w-10" /> */}
			</div>
			<p className="text-white mt-3">{ props.project_title }</p>
		</div>
	);
}
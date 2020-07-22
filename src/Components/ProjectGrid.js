import React from 'react';
// sm:bg-green-300 md:bg-green-700

import Eye from '../Assets/Imgs/EyeIcon.png';

export default function ProjectGrid(props) {
	return (
		<div className="flex justify-center flex-col items-center">
			<div className="relative project-card flex items-center justify-center">
				<img src={ props.image } alt="project view" className="rounded h-56 sm:h-64 hover:opacity-50 cursor-pointer" />
				<img src={ Eye } alt="view project icon" className="eye-icon absolute hover:block h-7 w-10" />
			</div>
			<p className="text-white mt-3">{ props.project_title }</p>
		</div>
	);
}
import React from 'react';
// sm:bg-green-300 md:bg-green-700
export default function ProjectGrid(props) {
	return (
		<div className="flex justify-center flex-col items-center ">
			<img src={ props.image } alt="PLE project" className="rounded h-56 sm:h-64" />
			<p className="text-white mt-3">{ props.project_title }</p>
		</div>
	);
}
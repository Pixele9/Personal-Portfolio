import React from 'react';

export default function ProjectGrid(props) {
	return (
		<div className="h-64 flex justify-center flex-col items-center sm:bg-green-300 md:bg-green-700">
			<img src={ props.image } alt="PLE project" className="rounded" />
			<p className="text-white mt-3">{ props.project_title }</p>
		</div>
	);
}
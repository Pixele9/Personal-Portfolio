import React from 'react';

export default function ProjectGrid(props) {
	return (
		<div className="mt-32 ml-24 h-64 flex flex-col items-center">
			<img src={ props.image } alt="PLE project" className="rounded" />
			<p className="text-white mt-3">{ props.project_title }</p>
		</div>
	);
}
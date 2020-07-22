import React from 'react';
import ReactDOM from 'react-dom';

export default function ProjectModal(props) {
	return ReactDOM.createPortal(
		<div className="fixed flex flex-col sm:flex-row rounded-lg w-8/12 bg-white ">
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
		</div>,
		document.getElementById("modal-root")
	);
}
import React from 'react';

export default function SkillGrid(props) {
	return(
		<div>
			<img src={props.image} alt="skill icon" className="transform hover:-translate-y-10 duration-200 hover:shadow-2xl cursor-pointer"/>
			<p className="text-white text-xl text-center -mt-8 font-bold">{props.name}</p>
		</div>
	);
}
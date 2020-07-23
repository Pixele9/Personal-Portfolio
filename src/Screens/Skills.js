import React from 'react';

import SkillGrid from '../Components/SkillGrid';

// import DB from '../Assets/Imgs/Skills/DB_icon.png';
// import MobileDev from '../Assets/Imgs/Skills/MobileDev_icon.png';
import Django from '../Assets/Imgs/Skills/Django_icon.png';
import Flask from '../Assets/Imgs/Skills/Flask_icon.png';
import Flutter from '../Assets/Imgs/Skills/Flutter_icon.png';
import Git from '../Assets/Imgs/Skills/Git_icon.png';
import JS from '../Assets/Imgs/Skills/JS_icon.png';
import Mongo from '../Assets/Imgs/Skills/MongoDB_icon.png';
import MySQL from '../Assets/Imgs/Skills/MySQL_icon.png';
import Python from '../Assets/Imgs/Skills/Python_icon.png';
import ReactJS from '../Assets/Imgs/Skills/ReactJS_icon.png';
import Swift from '../Assets/Imgs/Skills/Swift_icon.png';
import Webpack from '../Assets/Imgs/Skills/Webpack_icon.png';

export default function Skills() {

	const skills_names = [
		{
			"image": JS,
			"name": "Javascript"
		},
		{
			"image": ReactJS, 
			"name": "React JS"
		},
		{
			"image": Webpack, 
			"name": "Webpack"
		},
		{
			"image": Python, 
			"name": "Python"
		},
		{
			"image": Django, 
			"name": "Django"
		},
		{
			"image": Flask, 
			"name": "Flask"
		},
		{
			"image": Mongo, 
			"name": "Mongo DB"
		},
		{
			"image": MySQL, 
			"name": "MySQL"
		},
		{
			"image": Swift, 
			"name": "Swift"
		},
		{
			"image": Flutter,
			"name": "Flutter"
		},
		{
			"image": Git, 
			"name": "Git"
		},
	]

	return(
		<div className="z-10 mt-10 ml-10 mr-6 sm:mr-10 md:ml-12 md:mt-12 md:mr-10 lg:mt-16 lg:ml-24">
			<h1 className="main-title text-3xl sm:text-5xl lg:text-6xl">
				My Skills
			</h1>
			<div className="mt-10 sm:mt-12 mb-10 grid grid-cols-1 col-gap-16 row-gap-16 md:row-gap-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-10">
				{
					skills_names.map((data, idx) => (
						<SkillGrid
							image={data.image}
							name={data.name}
						/>
					))
				}
			</div>
		</div>	
	);
}
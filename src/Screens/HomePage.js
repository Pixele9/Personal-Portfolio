import React from 'react';

import bg_decoration from '../Assets/Imgs/BG-Decoration.svg';
import personal_logo from '../Assets/Imgs/PersonalLogo_DarkBG.png';

export default function HomePage() {
	return(
		<>
			<img src={ bg_decoration } alt="background decoration" className="absolute"/>
			<div className="mt-40 ml-24">
				<p className="main-title text-6xl">Hi, I'm Andrés Leal</p>
				<p className="description-text text-xl mt-4">Front End Developer in love with creation and innovation</p>

				<button className="mt-10 bg-transparent hover:bg-blue-700 text-blue-700 font-regular hover:text-white py-2 px-10 border border-blue-700 hover:border-transparent">
					<a href="mailto:pixele9@gmail.com">
						CONTACT ME
					</a>
				</button>
			</div>
			<img src={ personal_logo } alt="personal logo decoration" className="absolute right-0 bottom-0"/>
		</>
	);
}
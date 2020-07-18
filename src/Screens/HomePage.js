import React from 'react';

import bg_decoration from '../Assets/Imgs/BG-DecorationHome.png';
import personal_logo from '../Assets/Imgs/PersonalLogo_DarkBG.png';

export default function HomePage() {
	return(
		<>
			<div className="overflow-hidden pointer-events-none">
				<img src={ bg_decoration } alt="background decoration" className="absolute z-0 top-0 left-0 w-screen sm:w-8/12 md:w-10/12 md:h-auto lg:w-auto"/>
			</div>
			<div className="z-10 mt-20 ml-10 mr-6 sm:mr-10 md:ml-12 md:mt-32 md:mr-10 lg:mt-40 lg:ml-24">
				<p className="main-title text-3xl sm:text-5xl lg:text-6xl ">Hi <span role="img" aria-label="emoji">👋</span>, I'm Andrés Leal</p>
				<p className="description-text text-md mt-3 sm:text-md md:text-lg md:mt-4 lg:text-xl">Front End Developer in love with creation and innovation</p>

				<button className="mt-10 bg-transparent hover:bg-blue-700 text-blue-700 font-regular hover:text-white py-2 px-4 lg:px-10 border border-blue-700 hover:border-transparent">
					<a href="mailto:pixele9@gmail.com">
						CONTACT ME
					</a>
				</button>
			</div>
			<img src={ personal_logo } alt="personal logo decoration" className="absolute right-0 bottom-0 w-8/12 sm:w-1/2 md:w-6/12 lg:w-4/12 
			xl:h-4/12"/>
		</>
	);
}
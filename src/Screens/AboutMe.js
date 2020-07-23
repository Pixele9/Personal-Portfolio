import React from 'react';

import bg_decoration from '../Assets/Imgs/BG-DecorationAbout.png';
import hello_image from '../Assets/Imgs/bitmoji.png';

export default function AboutMe() {
	return(
		<>
			<div className="z-0 overflow-hidden">
				<img src={ bg_decoration } alt="background decoration" className="absolute z-0 top-0 left-0 sm:w-8/12 md:w-10/12 md:h-auto lg:w-auto"/>
			</div>
			<div className="z-10 mt-20 ml-10 mr-6 sm:mr-10 md:ml-12 md:mt-32 md:mr-10 mt-16per lg:ml-24">
				<p className="main-title text-3xl sm:text-5xl lg:text-6xl ">About Me</p>
				<div className="z-10 text-sm lg:mr-64 lg:pr-32">
					<p className="description-text text-md mt-3 sm:text-md md:text-lg md:mt-4 lg:text-lg">
						I’m a web developer in constant search for growth, professionaly  and in daily life. 
						<br/>In technology I find inspiration to create and develop better tools for people around the globe
					</p>
					<p className="description-text text-md mt-5 sm:text-md md:text-lg md:mt-6 lg:text-lg">
						When I’m not coding and learning new technologies, I really enjoy music, design, hanging out 
						with friends, applying self developemnt.
					</p>
					{/* <p className="description-text text-md mt-5 sm:text-md md:text-lg md:mt-6 lg:text-lg">
						I deeply believe in technology being the best way to change our future to a better one, discover
						new incredible things about our universe, connect with people, find new inspiration where no one
						expected to, express ourselves, and many more things.
					</p> */}
				</div>

			</div>
			<img src={ hello_image } alt="personal logo decoration" className="z-0 absolute right-0 bottom-0 w-8/12 sm:w-1/2 md:w-6/12 lg:w-4/12 
			xl:h-4/12"/>
		</>
	);
}
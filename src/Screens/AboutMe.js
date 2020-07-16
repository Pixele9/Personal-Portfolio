import React from 'react';

import bg_decoration from '../Assets/Imgs/BG-DecorationAbout.png';
import hello_image from '../Assets/Imgs/bitmoji.png';

export default function AboutMe() {
	return(
		<>
			<div className="overflow-hidden">
				<img src={ bg_decoration } alt="background decoration" className="absolute z-0 top-0 left-0 sm:w-8/12 md:w-10/12 md:h-auto lg:w-auto"/>
			</div>
			<div className="z-10 mt-20 ml-10 mr-6 sm:mr-10 md:ml-12 md:mt-32 md:mr-10 lg:mt-40 lg:ml-24">
				<p className="main-title text-3xl sm:text-5xl lg:text-6xl ">About Me</p>
				<div className="text-xs lg:mr-64 lg:pr-16">
					<p className="description-text text-md mt-3 sm:text-md md:text-lg md:mt-4 lg:text-xl">
						I’m a web developer in constant search for growth, professionaly  and in daily life. 
						<br/>In technology I find inspiration to create and develop better tools for people around the globe
					</p>
					<p className="description-text text-md mt-3 sm:text-md md:text-lg md:mt-4 lg:text-xl">
						When I’m not coding and learning new technologies I really enjoy music, design, hanging out 
						with people I love self developemnt.
					</p>
					<p className="description-text text-md mt-3 sm:text-md md:text-lg md:mt-4 lg:text-xl">
						I deeply believe in technology being the best way to change our future to a better one, discover
						new incredible things about our universe, connect with people, find new inspiration where no one
						expected to, express ourselves, and many more things.
					</p>
				</div>

			</div>
			<img src={ hello_image } alt="personal logo decoration" className="absolute right-0 bottom-0 w-8/12 sm:w-1/2 md:w-6/12 lg:w-4/12 
			xl:h-4/12"/>
		</>
	);
}
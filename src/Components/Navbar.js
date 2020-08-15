import React from 'react';
import '../Assets/css/output.css';

import logo from '../Assets/Imgs/PersonalLogo_NoBG.png';
import home_icon from '../Assets/Imgs/HomeIcon.png';
import aboutme_icon from '../Assets/Imgs/AboutMeIcon.png';
import skills_icon from '../Assets/Imgs/SkillsIcon.png';
import mywork_icon from '../Assets/Imgs/MyWorkIcon.png';
import podcast_icon from '../Assets/Imgs/PodcastIcon.svg';
// import contact_icon from '../Assets/Imgs/ContactIcon.png';

import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="navbar flex md:block z-10 w-full h-16 md:w-20 md:h-screen justify-center">
			<div className="flex logo-continer justify-center items-center flex-col w-16 h-16 md:w-20 md:h-20 bg-green-300 md:mr-10">
				<img src={ logo } alt="personal logo" className="w-8 md:w-12" />
			</div>
			{/* <div className="icon-section md:mt-24"> */}
				<div className="icons flex flex-grow md:flex-col justify-around h-16 px-3 md:h-400 h-25-rem items-center md:mt-24">
					<Link to="/">
						<img src={ home_icon } alt="home icon" className="w-6 md:w-8 hover:opacity-50"/>
					</Link>
					<Link to="/projects">
						<img src={ mywork_icon } alt="my work icon" className="w-6 md:w-8 hover:opacity-50"/>
					</Link>
					<Link to="/skills">
						<img src={ skills_icon } alt="skills icon" className="w-6 md:w-8 hover:opacity-50"/>
					</Link>
					<Link to="/about">
						<img src={ aboutme_icon } alt="about me icon" className="w-4 md:w-6 hover:opacity-50"/>
					</Link>
					<Link to="/techforhumans">
						<img src={ podcast_icon } alt="podcast icon" className="w-6 md:w-8 hover:opacity-50"/>
					</Link>
					{/* <Link to="/contact">
						<img src={ contact_icon } alt="contact icon" className="w-5 md:w-6 hover:opacity-50"/>
					</Link> */}
				</div>
			{/* </div> */}
		</div>
	);
}
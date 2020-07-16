import React from 'react';
import '../Assets/css/output.css';

import logo from '../Assets/Imgs/PersonalLogo_NoBG.png';
import home_icon from '../Assets/Imgs/HomeIcon.png';
import aboutme_icon from '../Assets/Imgs/AboutMeIcon.png';
import skills_icon from '../Assets/Imgs/SkillsIcon.png';
import mywork_icon from '../Assets/Imgs/MyWorkIcon.png';
import contact_icon from '../Assets/Imgs/ContactIcon.png';

export default function Navbar() {
	return (
		<div className="navbar object-left w-20 h-screen justify-center">
			<div className="flex logo-continer justify-center items-center flex-col w-20 h-20">
				<img src={ logo } alt="personal logo" className="w-12" />
			</div>
			<div className="icon-section flex justify-center items-center mt-24">
				<div className="icons flex flex-col justify-around h-25-rem items-center">
					<a href="/">
						<img src={ home_icon } alt="home icon" className="w-8"/>
					</a>
					<a href="/">
						<img src={ mywork_icon } alt="my work icon" className="w-8"/>
					</a>
					<a href="/">
						<img src={ skills_icon } alt="skills icon" className="w-8"/>
					</a>
					<a href="/">
						<img src={ aboutme_icon } alt="about me icon" className="w-6"/>
					</a>
					<a href="/">
						<img src={ contact_icon } alt="contact icon" className="w-6"/>
					</a>
				</div>
			</div>
		</div>
	);
}
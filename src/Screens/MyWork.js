import React from 'react';

import ProjectGrid from '../Components/ProjectGrid';

import PLE from '../Assets/Imgs/NewPLE.png';
import CorrelationCOVID from '../Assets/Imgs/NewCorrelacionCOVID.png';
import GitHubClient from '../Assets/Imgs/NewGitHub.png';
import PersonalityInsights from '../Assets/Imgs/NewPersonalityInsights.png';
import SocialApex from '../Assets/Imgs/NewSocialApex.png';
import FlipIt from '../Assets/Imgs/NewFlipIt.png';
import PushUp from '../Assets/Imgs/NewPushUp.png';
import LilyPad from '../Assets/Imgs/NewLilyPad.png';

export default function MyWork() {
	return(
		<div>
			<div className="z-10 mt-10 ml-10 mr-6 sm:mr-10 md:ml-12 md:mt-12 md:mr-10 lg:mt-16 lg:ml-24">
				<h1 className="main-title text-3xl sm:text-5xl lg:text-6xl">My Work</h1>
			</div>
			<div className="mt-10 mb-10 grid grid-cols-1 row-gap-8 sm:ml-10  md:row-gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				<ProjectGrid image={ PLE } project_title="Personal Learning Environment" />
				<ProjectGrid image={ CorrelationCOVID } project_title="Correlation COVID-19" />
				<ProjectGrid image={ GitHubClient } project_title="GitHub Client" />
				<ProjectGrid image={ PersonalityInsights } project_title="Personality Insights" />
				<ProjectGrid image={ SocialApex } project_title="Social Apex" />
				<ProjectGrid image={ FlipIt } project_title="Flip It!" />
				<ProjectGrid image={ PushUp } project_title="Push Up Counter!" />
				<ProjectGrid image={ LilyPad } project_title="LilyPad Motivation" />
				{/* <div className="mt-32 ml-24 w-64 h-64">
					<img src={ PLE } alt="PLE project" className="rounded" />
					<p className="text-white ">Personal Learning Environment</p>
				</div>
				<div className="mt-32 ml-24 w-64 h-64 flex flex-col items-center">
					<img src={ CorrelationCOVID } alt="PLE project" className="rounded" />
					<p className="text-white mt-3">Correlation COVID</p>
				</div> */}
			</div>
		</div>
	);
}
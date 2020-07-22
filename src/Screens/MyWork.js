import React, { useState } from "react";

// Components imports
import ProjectGrid from "../Components/ProjectGrid";
import Modal from "../Components/ProjectModal";

// Image imports
import PLE from "../Assets/Imgs/NewPLE.png";
import CorrelationCOVID from "../Assets/Imgs/NewCorrelacionCOVID.png";
import GitHubClient from "../Assets/Imgs/NewGitHub.png";
import PersonalityInsights from "../Assets/Imgs/NewPersonalityInsights.png";
import SocialApex from "../Assets/Imgs/NewSocialApex.png";
import FlipIt from "../Assets/Imgs/NewFlipIt.png";
import PushUp from "../Assets/Imgs/NewPushUpCounter.png";
import LilyPad from "../Assets/Imgs/NewLilyPad.png";
import { ModalContext } from "../Contexts/ModalContext";

export default function MyWork() {
	const [modalState, setModalState] = useState({showModal: false});

	return (
		<>
			<div className="">
				<div className="z-10 mt-10 ml-10 mr-6 sm:mr-10 md:ml-12 md:mt-12 md:mr-10 lg:mt-16 lg:ml-24">
					<h1 className="main-title text-3xl sm:text-5xl lg:text-6xl">
						My Work
					</h1>
				</div>
				<div className="mt-10 mb-10 grid grid-cols-1 col-gap-8 row-gap-8 sm:ml-10 md:row-gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					<ModalContext.Provider value={{modalState, setModalState}}>
						<ProjectGrid
							image={PLE}
							project_title="Personal Learning Environment"
						/>
						<ProjectGrid
							image={CorrelationCOVID}
							project_title="Correlation COVID-19"
						/>
						<ProjectGrid
							image={GitHubClient}
							project_title="GitHub Client"
						/>
						<ProjectGrid
							image={PersonalityInsights}
							project_title="Personality Insights"
						/>
						<ProjectGrid
							image={SocialApex} 
							project_title="Social Apex" 
						/>
						<ProjectGrid 
							image={FlipIt} 
							project_title="Flip It!"
						/>
						<ProjectGrid
							image={LilyPad}
							project_title="LilyPad Motivation"
						/>
						<ProjectGrid 
							image={PushUp} 
							project_title="Push Up Counter"
						/>
					</ModalContext.Provider>
					{
						// Render modal only if clicked on project
						modalState.showModal ? (
							<Modal
								className="flex justify-center items-center"
								image1={PLE}
								image2={PLE}
								projectName="Personal Learning Environment"
								description="Web application focused on helping students organize and make all their education resources easier to access them and keep them in one place"
								learned="Firstly, this has been the biggest project I have developed with a team and has been a very good learning experience.
								Learning a new programming language like Golang has been a very good experience with frameworks such as Gin-gonic"
							/>
						) : null
					}
				</div>
			</div>
			{/* <div className="flex items-center justify-center h-full w-full flex-grow absolute ">
				<Modal
					className=""
					image1={PLE}
					image2={PLE}
					projectName="Personal Learning Environment"
					description="Web application focused on helping students organize and make all their education resources easier to access them and keep them in one place"
					learned="Firstly, this has been the biggest project I have developed with a team and has been a very good learning experience.
					Learning a new programming language like Golang has been a very good experience with frameworks such as Gin-gonic"
				/>
			</div> */}
		</>
	);
}

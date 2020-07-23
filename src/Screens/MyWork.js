import React, { useState } from "react";

// Components imports
import ProjectGrid from "../Components/ProjectGrid";
import Modal from "../Components/ProjectModal";
import { ModalContext } from "../Contexts/ModalContext";

// Image imports
import PLE from "../Assets/Imgs/NewPLE.png";
import CorrelationCOVID from "../Assets/Imgs/NewCorrelacionCOVID.png";
import GitHubClient from "../Assets/Imgs/NewGitHub.png";
import PersonalityInsights from "../Assets/Imgs/NewPersonalityInsights.png";
import SocialApex from "../Assets/Imgs/NewSocialApex.png";
import FlipIt from "../Assets/Imgs/NewFlipIt.png";
import PushUp from "../Assets/Imgs/NewPushUpCounter.png";
import LilyPad from "../Assets/Imgs/NewLilyPad.png";

export default function MyWork() {
	const [modalState, setModalState] = useState({showModal: false});
	const [modalDetailID, setModalDetailID] = useState(0)

	const _openModal = () => {
		setModalState({showModal: true})
	};

	//TODO:  Add Technologies Used on Each project
	const proj_info = [
		{
			"image": PLE,
			"project_title": "Personal Learning Environment",
			"description": "Web application focused on helping students organize and make all their education resources easier to access them and keep them in one place.",
			"learned": "Firstly, this has been the biggest project I have developed with a team and has been a very good learning experience. A new programming language being Golang, framework: Gin-Gonic, and applying my React JS knowledge.",
			"technologies": "Go | JS - React JS | Mongo DB | MySQL | Foundation CSS"
		},
		{
			"image": CorrelationCOVID,
			"project_title": "Correlation COVID-19",
			"description": "Web application showing correlation between patients health condition deaths. The input on the page will make a prediciton using my sklearn model showing the number of deaths at the end of the day based on previous data.",
			"learned": "All the steps that take to clean a dataset, train and export a ML model to a web application. Better analysis on what data is the right one to train my data on.",
			"technologies": "Flask | Scikit-Learn | JavaScript | Python | SCSS"
		},
		{
			"image": GitHubClient,
			"project_title": "GitHub Client",
			"description": "GitHub Client made with WebPack, Bootstrap and GitHub's API allowing users to search a GitHub profile listing their information along with their repositories.",
			"learned": "Better understanding on how WebPack works and its configuration. Use of GitHub API.",
			"technologies": "WebPack | Bootstrap | JavaScript"
		},
		{
			"image": PersonalityInsights,
			"project_title": "Personality Insights",
			"description": "Web application that will show a persons personality traits using IBM Cloud AI, analyzing a minimum of 1,000 words to result in a great accuracy.",
			"learned": "Use of IBM Cloud Infrastructure and consuming their API.",
			"technologies": "IBM Cloud | Flask | Python | Chart.JS | JavaScript"
		},
		{
			"image": SocialApex,
			"project_title": "Social Apex",
			"description": "Social platform or forum for the videogame Apex Legends community, allowing users to create their profile post news, photos, rate posts and visualize player's stats form the game.",
			"learned": "Consuming an API and DB modeling.",
			"technologies": "JS - React JS | Django | Python | MySQL"
		},
		{
			"image": FlipIt,
			"project_title": "FlipIt!",
			"description": "Application for iOS and Android that allows users to make decisions based on randomness. A user can toss a coin or create a roulette that uses sockets so that your frinds can connect to the roulette you created and see the result live on each ones device.",
			"learned": "Socket implementation. Learning Dart. Dart animation using 4D matrices.",
			"technologies": "Dart | Flutter | Django | Django Channels (Sockets)"
		},
		{
			"image": LilyPad,
			"project_title": "Lily Pad Motivation",
			"description": "App that for iOS that its main goal was to inspre you when you opened the app, showing a famous quote and allowing the user to get more of them with a tap of a button. This was my first iOS applicaiton developed in Swift when I was 14 years old.",
			"learned": "Learned the Swift programming language and Apple's App Store review process.",
			"technologies": "UIKit | Swift"
		},
		{
			"image": PushUp,
			"project_title": "Push Up Counter",
			"description": "iOS app that lets you focus on doing push ups and not worring about how many have you done, since it uses the proximity sensor on the iPhone to count each repetition.",
			"learned": "Use of different libraries for the iPhone peripherials and hone my skills on Swift.",
			"technologies": "UIKit | Swift"
		}
	]


	return (
		<>
			<div className="">
				<div className="z-10 mt-10 ml-10 mr-6 sm:mr-10 md:ml-12 md:mt-12 md:mr-10 lg:mt-16 lg:ml-24">
					<h1 className="main-title text-3xl sm:text-5xl lg:text-6xl">
						My Work
					</h1>
				</div>
				<div className="mt-10 mb-10 grid grid-cols-1 col-gap-8 row-gap-8 sm:ml-10 md:row-gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-10">
					<ModalContext.Provider value={{modalState, setModalState}}>
						{proj_info.map((info, idx) => (
							<ProjectGrid
								key={idx}
								id={idx}
								image={info.image}
								project_title={info.project_title}
								onClick={() => {
									_openModal()
									setModalDetailID(idx)
								}}
							/>
						))}
					{
						// Render modal only if clicked on project
						modalState.showModal ? (
							<Modal
								className="flex justify-center items-center"
								image={proj_info[modalDetailID].image}
								technologies={proj_info[modalDetailID].technologies}
								projectName={proj_info[modalDetailID].project_title}
								description={proj_info[modalDetailID].description}
								learned={proj_info[modalDetailID].learned}
							/>
						) : null
					}
					</ModalContext.Provider>
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

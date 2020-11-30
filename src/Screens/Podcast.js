import React, {useState} from 'react';

import podcastParser from 'node-podcast-parser';
import request from 'request';

import PodcastCard from '../Components/PodcastCard';
import { useEffect } from 'react';

// https://developer.spotify.com/documentation/web-api/reference/shows/get-shows-episodes/
// parse all spotify episodes and embed them here

export default function Podcast() {
	const [podcastData, setPodcastData] = useState({})

	// async function getRSS() {
	// 	fetch("https://anchor.fm/s/2c51819c/podcast/rss")
	// 	.then(response => {
	// 		return response
	// 	})
	// 	.then(data => {
	// 		console.log("DATA")
	// 		console.log(data)

	// 		podcastParser(data, (err, data) => {
	// 			if(err) {
	// 				console.error("PARSING ERROR", err)
	// 			}

	// 			console.log(data)
	// 		})
	// 		setPodcastData(data.episodes)
			
	// 	})
	// }
	let response = {}
	let podcastInfo = {}

	useEffect(() => {
		async function fetchData() {
			await request("https://anchor.fm/s/2c51819c/podcast/rss", (err, res, data) => {
				if (err) {
					console.error("Network error", err);
					return;
				}
	
				podcastParser(data, (err, data) => {
					if (err) {
						console.error("Parsing error", err);
						return;
					}
	
					setPodcastData(data.episodes)
					console.log(podcastData)
				})
				// setPodcastData(data.episodes)
			})
		}
		fetchData()
	}, [])


	async function getRSS() {
		let response = {}
		let res = await request("https://anchor.fm/s/2c51819c/podcast/rss", (err, res, data) => {
			if (err) {
				console.error("Network error", err);
				return;
			}

			podcastParser(data, (err, data) => {
				if (err) {
					console.error("Parsing error", err);
					return;
				}

				if (data) {
					// setPodcastData(data.episodes)
					podcastInfo = data.episodes
					response = data.episodes
					return response
				}
				// console.log(data.episodes)
			})
			// setPodcastData(data.episodes)
		})
		console.log(res.json())
		return res.json()
	}
	// console.log(getRSS())

	async function getFeed() {
		try {
			const resFeed = await fetch("https://anchor.fm/s/2c51819c/podcast/rss")
			const feed = resFeed

			podcastParser(feed, (err, data) => {
				if (err) {
					console.log("Parsing error: ", err)
				}

				// if (data) {
				// 	return data.episodes
				// }
				console.log(data)
			})
		} catch (error) {
			console.log("ERROR: ", error)
		}
	}
	return (
		// getRSS() ? ( <h1>{podcastInfo[0]}</h1> ) : null
		<div className="flex justify-center items-center h-full w-full flex-col bg-green-500">
			<div className="bg-green-500 w-64 h-64 ">
				<iframe src="https://open.spotify.com/embed/show/1DS3sGBnJehoRuORb3mHE0" width="100%" height="411" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="podcast feed"></iframe>
			</div>
			{
				
				// console.log(podcastInfo)
				// podcastInfo.map(data => (
				// 	<PodcastCard />
				// ))
				// podcastInfo != {} ? (
				// 	podcastInfo.episodes.map(data => (
				// 		<PodcastCard />
				// 	))
				// ) : null 
			}
			{/* <iframe title="Podcast Feed" src="https://open.spotify.com/embed-podcast/episode/2XpH2HhoFHkCe9HNiXaeJx" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media" className="m-16"></iframe> */}
		</div>
	)
}
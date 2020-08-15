import React, {useState} from 'react';

import podcastParser from 'node-podcast-parser';
import request from 'request';

import PodcastCard from '../Components/PodcastCard';

// https://developer.spotify.com/documentation/web-api/reference/shows/get-shows-episodes/
// parse all spotify episodes and embed them here

export default function Podcast() {
	const [podcastData, setPodcastData] = useState({})

	// fetch("https://anchor.fm/s/2c51819c/podcast/rss")
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

	request("https://anchor.fm/s/2c51819c/podcast/rss", (err, res, data) => {
		if (err) {
			console.error("Network error", err);
			return;
		}

		podcastParser(data, (err, data) => {
			if (err) {
				console.error("Parsing error", err);
				return;
			}

			// console.log(data.episodes)
		})
		setPodcastData(data.episodes)
	})
	return (
		<div className="w-64 p-16">
			{
				console.log(podcastData)
				// podcastData != {} ? (
				// 	podcastData.episodes.map(data => (
				// 		<PodcastCard />
				// 	))
				// ) : null 
			}
			<iframe title="Podcast Feed" src="https://open.spotify.com/embed-podcast/episode/2XpH2HhoFHkCe9HNiXaeJx" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media" className="m-16"></iframe>
		</div>
	)
}
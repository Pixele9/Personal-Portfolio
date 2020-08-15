import React from 'react';

export default function PodcastCard(props) {
	return (
		<div className="w-24 h-24 mx-10">
			<img src={props.img} alt="podcast episode" className="w-full rounded-lg"/>
		</div>
	);
}
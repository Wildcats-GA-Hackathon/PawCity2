import React from 'react';
import EventCard from '../../components/Cards/EventCard';

const EventDisplay = () => {
	return (
		<div>
			<h2>Events Near You</h2>
			<div>
				<EventCard></EventCard>
			</div>
		</div>
	);
};

export default EventDisplay;

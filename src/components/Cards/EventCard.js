import React from 'react';
import { Container } from '@material-ui/core';
import dogOne from '../../images/dog-one.png';
import dogTwo from '../../images/dog-two.png';
import dogThree from '../../images/dog-three.png';

const EventCard = () => {
	return (
		<div className='event-display'>
			<Container className='shadow event-card-style'>
				<div>
					<img src={dogOne} alt='dog1' height={80} />
				</div>
				<h3>PlayDate</h3>
				<p>.5 miles away</p>
				<footer>
					<button>Details</button>
				</footer>
			</Container>
			<Container className='shadow event-card-style'>
				<div>
					<img src={dogTwo} alt='dog2' height={80} />
				</div>
				<h3>CorgiMeet</h3>
				<p>.6 miles away</p>
				<footer>
					<button>Details</button>
				</footer>
			</Container>
			<Container className='shadow event-card-style'>
				<div>
					<img src={dogThree} alt='dog3' height={80} />
				</div>
				<h3>Yorkie Walk</h3>
				<p>.8 miles away</p>
				<footer>
					<button>Details</button>
				</footer>
			</Container>
		</div>
	);
};

export default EventCard;

import React from 'react';
import { Container } from '@material-ui/core';
import dogOne from '../../images/dog-one.png';
import dogTwo from '../../images/dog-two.png';
import dogThree from '../../images/dog-three.png';

const EventCard = () => {
	return (
		<div className='event-display'>
			<div>
				<Container className='shadow event-card-style'>
					<div>
						<img src={dogOne} alt='dog1' height={80} />
					</div>
					<div>
						<h3>PlayDate</h3>
						<p>.5 miles away</p>
					</div>
					<div className='event-footer'>
						<button className='buttons'>Details</button>
					</div>
				</Container>
			</div>
			<div>
				<Container className='shadow event-card-style'>
					<div>
						<img src={dogTwo} alt='dog2' height={80} />
					</div>
					<div>
						<h3>CorgiMeet</h3>
						<p>.6 miles away</p>
					</div>
					<div className='event-footer'>
						<button className='buttons'>Details</button>
					</div>
				</Container>
			</div>
			<div>
				<Container className='shadow event-card-style'>
					<div>
						<img src={dogThree} alt='dog3' height={80} />
					</div>
					<div>
						<h3>Yorkie Walk</h3>
						<p>.8 miles away</p>
					</div>
					<div className='event-footer'>
						<button className='buttons'>Details</button>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default EventCard;

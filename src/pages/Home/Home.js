import React, { useState, Fragment } from 'react';
import FixedBottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import { Container, Input } from '@material-ui/core';
import useStyles from './styles';
import EventDisplay from '../Display/EventDisplay';
import PostsDisplay from '../Display/PostsDisplay';
// import Box from '@mui/material/Box';

const Home = () => {
	const classes = useStyles();

	const [post, setPost] = useState('');

	function handleChange(event) {
		setPost(event.target.value);
	}

	return (
		<div>
			<Container>
				<h1>Hello User!</h1>
				<Input
					type='text'
					name='post'
					value={post}
					variant='contained'
					placeholder='What would you like to do today?'
					onChange={handleChange}
				/>
			</Container>
			<Container>
				<EventDisplay></EventDisplay>
			</Container>
			<Container>
				<PostsDisplay></PostsDisplay>
			</Container>
		</div>
	);

	// return (
	// 	<div>
	// 		<Container maxWidth='sm' className={classes.paper} container spacing={4}>
	// 			<MediaCard></MediaCard>
	// 			<MediaCard></MediaCard>
	// 			<MediaCard></MediaCard>
	// 		</Container>
	// 		<FixedBottomNavigation></FixedBottomNavigation>
	// 	</div>
	// );
};

export default Home;

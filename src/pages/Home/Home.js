import React, { useState, Fragment } from 'react';
import FixedBottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import { Container, Input } from '@material-ui/core';
import useStyles from './styles';
import EventDisplay from '../Display/EventDisplay';
import PostsDisplay from '../Display/PostsDisplay';
// import Box from '@mui/material/Box';
import TextField from '@material-ui/core/TextField';
import PostIcon from '../../images/PostIcon.jpg';

const Home = () => {
	const classes = useStyles();

	const [post, setPost] = useState('');

	function handleChange(event) {
		setPost(event.target.value);
	}

	return (
		<div>
			<div className='create-post shadow'>
				<div className='top-post'>
					<div>
						<img src={PostIcon} alt='Icon' />
					</div>
					<div className='textfield'>
						<TextField
							type='text'
							name='post'
							multiline
							rows={3}
							value={post}
							variant='standard'
							placeholder='What would you like to do today?'
							onChange={handleChange}
							autoFocus
							InputProps={{
								disableUnderline: true,
							}}
							className='textfield'
						/>
					</div>
				</div>
				<div className='button-div'>
					<button className='buttons post-button'>Post</button>
					<button className='buttons photo-button'>Photo</button>
					<button className='buttons event-button'>Event</button>
				</div>
			</div>
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

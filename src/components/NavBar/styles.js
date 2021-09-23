import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid, Container } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';

export default function MediaCard() {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component='img'
					height='140'
					image='https://i.imgur.com/G3pIrLE.png'
					alt='kitten'
				/>
			</CardActionArea>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					Play Date
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					.5 Miles Away
				</Typography>
			</CardContent>
			<CardActions>
				<Grid container justify='flex-end'>
					{/* <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button> */}
					<IconButton aria-label='add to favorites'>
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label='share'>
						<ShareIcon />
					</IconButton>
				</Grid>
			</CardActions>
		</Card>
	);
}

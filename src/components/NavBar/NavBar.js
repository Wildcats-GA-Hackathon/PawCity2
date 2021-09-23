import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import useStyles from './styles';

export default function ButtonAppBar() {
	// const classes = useStyles();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' color='primary'>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='primary'
						aria-label='menu'
						sx={{ mr: 2 }}>
						{/* <MenuIcon /> */}
					</IconButton>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						PawCity
					</Typography>
					<Button color='inherit' component={Link} to='/auth'>
						Login
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Avatar,
	Button,
	Paper,
	Grid,
	Typography,
	Container,
	TextField,
} from '@material-ui/core';
import useStyles from './styles';
import Input from './Input';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Form = () => {
	const [isSignedUp, setIsSignedUp] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	// const [isLoggedIn, setIsLoggedIn] = useState(false)

	// useEffect(() => {
	//     if(window.localStorage.getItem('token')){
	//         setIsLoggedIn(true)
	//     } else {
	//         setIsLoggedIn(false)
	//     }
	// }, [])

	const handleShowPassword = () => setShowPassword(!showPassword);

	const handleSubmit = () => {};

	const switchMode = () => {
		setIsSignedUp((previsSignedUp) => !previsSignedUp);
	};

	const handleChange = () => {};

	const classes = useStyles();

	return (
		<Container component='main' maxWidth='xs'>
			<Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					{!isSignedUp ? 'Sign up' : 'Sign in'}
				</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{!isSignedUp ? (
							<Fragment>
								<Input
									name='firstName'
									label='First Name'
									handleChange={handleChange}
								/>
								<Input
									name='lastName'
									label='Last Name'
									handleChange={handleChange}
								/>
								<Input name='email' label='Email' handleChange={handleChange} />
								<Input
									name='password'
									label='Password'
									handleChange={handleChange}
									type={showPassword ? 'text' : 'password'}
									handleShowPassword={handleShowPassword}
								/>
								<Input
									name='confirmPassword'
									label='Confirm Password'
									handleChange={handleChange}
									type={showPassword ? 'text' : 'password'}
									handleShowPassword={handleShowPassword}
								/>
							</Fragment>
						) : (
							<Fragment>
								<Input name='email' label='Email' handleChange={handleChange} />
								<Input
									name='password'
									label='Password'
									handleChange={handleChange}
									type={showPassword ? 'text' : 'password'}
									handleShowPassword={handleShowPassword}
								/>
							</Fragment>
						)}
					</Grid>
					<Button
						type='submit'
						fullwidth={true}
						variant='contained'
						color='primary'
						className={classes.submit}
						component={Link}
						to='/home'>
						{!isSignedUp ? 'Sign Up' : 'Sign In'}
					</Button>
					<Grid container justifyContent='flex-end'>
						<Grid item>
							<Button onClick={switchMode}>
								{!isSignedUp
									? 'Already have an account? Sign in'
									: "Don't have an account? Sign Up"}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default Form;

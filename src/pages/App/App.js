import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { Container, Typography, Grow, Grid } from '@material-ui/core';
import Form from '../Form/Form';
import Home from '../Home/Home';
// import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
	return (
		<Container maxWidth='lg'>
			<NavBar />
			<Switch>
				<Route exact path='/auth' component={Form} />
				<Route exact path='/home' component={Home} />
				{/* <Route path='/home'> */}
				{/* <Home component={Home} />
				</Route> */}
			</Switch>
		</Container>
	);
};

export default App;

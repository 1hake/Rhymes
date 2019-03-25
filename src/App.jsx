import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { Provider } from 'react-redux';
import store from './components/reducer';
import Router from './Router';

const theme = createMuiTheme({
	palette: {
		primary: blue,
		white: '#ffffff'
	}
});

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<MuiThemeProvider theme={theme}>
					<Router />
				</MuiThemeProvider>
			</Provider>
		);
	}
}

const style = {
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center'
	}
};

export default withStyles(style)(App);

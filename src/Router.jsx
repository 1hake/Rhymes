import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Main from './components/Main';

class Router extends Component {
	componentDidMount() {}

	render() {
		return (
			<BrowserRouter basename="/">
				<Switch>
					<Route path="/" component={Main} />
				</Switch>
			</BrowserRouter>
		);
	}
}

const style = {
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#d6d6d6'
	}
};

export default connect((state) => ({}), {})(withStyles(style)(Router));

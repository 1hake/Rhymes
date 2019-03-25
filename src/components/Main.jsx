import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import MyInput from './MyInput';
import RhymeList from './RhymeList';

class Main extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<MyInput />
				<RhymeList />
			</div>
		);
	}
}

const style = {
	root: {
		height: '100vh',
		backgroundColor: '#3f51b5',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column'
	}
};

export default connect((state) => ({}), {})(withStyles(style)(Main));

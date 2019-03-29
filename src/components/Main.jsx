import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import MyInput from './MyInput';
import RhymeList from './RhymeList';
import WordList from './WordList';
import WhiteSpace from './WhiteSpace';

class Main extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<WhiteSpace />
				<WhiteSpace />
				<MyInput />
				{/* <WordList /> */}
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
		justifyContent: 'flex-start',
		flexDirection: 'column'
	}
};

export default connect((state) => ({}), {})(withStyles(style)(Main));

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { storeSentence, storeAndTransform } from './actions';

class MyInput extends Component {
	handleChange = () => (event) => {
		this.props.storeAndTransform(event.target.value);
	};

	render() {
		const { classes } = this.props;
		return (
			<TextField
				onChange={this.handleChange()}
				style={{ width: '80%', margin: 8, color: 'white' }}
				placeholder="Ecris une phrase..."
				margin="normal"
				fullWidth
				InputProps={{
					classes: {
						input: classes.newRoot
					}
				}}
			/>
		);
	}
}

const style = {
	newRoot: {
		color: 'white',
		fontFamily: 'Montserrat',
		fontWeight: 'bold',
		fontSize: '1.8em'
	},
	root: {
		height: '100vh',
		backgroundColor: '#536dfe',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
};

export default connect((state) => ({}), { storeSentence, storeAndTransform })(withStyles(style)(MyInput));

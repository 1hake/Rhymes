import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Slide, Grow } from '@material-ui/core';

class RhymeList extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				{this.props.list.map((word) => {
					return (
						word.length > 0 && (
							<Grow in={word.length > 0}>
								<div className={classes.word}>
									{word.map((cb) => {
										return (
											<Slide in={true} direction={'up'}>
												<div className={classes.item}>{cb}</div>
											</Slide>
										);
									})}
								</div>
							</Grow>
						)
					);
				})}
			</div>
		);
	}
}

const style = {
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		width: '83%'
	},
	word: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		backgroundColor: 'white',
		padding: '6px',
		borderRadius: '25%',
		marginLeft: '5px',
		boxShadow: '-1px 17px 43px -13px rgba(0,0,0,0.75)'
	},
	item: {
		height: '30px',
		width: '30px',
		backgroundColor: '#3f51b5',
		color: 'white',
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: '-1px 17px 43px -13px rgba(0,0,0,0.75)'
	}
};

export default connect((state) => ({ list: state.transformedSentence }), {})(withStyles(style)(RhymeList));

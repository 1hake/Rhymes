import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Slide, Grow } from '@material-ui/core';
import { rhymeColorMatch } from '../constants/rhymeColorMatch';

class RhymeList extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				{this.props.list.map((word, index) => {
					return (
						word.length > 0 && (
							<div className={classes.wordContainer}>
								{this.props.currentWordList[index] && (
									<Grow key={index} in={word.length > 0}>
										<div className={classes.word}>
											<div className={classes.text}>{this.props.currentWordList[index]}</div>
										</div>
									</Grow>
								)}
								<Grow key={index} in={word.length > 0}>
									<div className={classes.word}>
										{word.map((cb, index) => {
											return (
												<Slide key={index} in={true} direction={'up'}>
													<div
														style={{ backgroundColor: rhymeColorMatch[cb] }}
														className={classes.item}
													>
														{cb}
													</div>
												</Slide>
											);
										})}
									</div>
								</Grow>
							</div>
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
		flexWrap: 'wrap',
		width: '83%'
	},
	word: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		backgroundColor: 'white',
		padding: '10px',
		borderRadius: '25px',
		marginLeft: '5px',
		marginTop: '5px',
		boxShadow: '-1px 17px 43px -13px rgba(0,0,0,0.75)'
	},
	item: {
		height: '30px',
		width: '30px',
		color: 'white',
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: '-1px 17px 43px -13px rgba(0,0,0,0.75)',
		fontWeight: 'bold'
	},
	wordContainer: {
		display: 'flex',
		flexDirection: 'column'
	},
	text: {
		fontFamily: 'Montserrat',
		fontWeight: 'bold',
		fontSize: '1.5em'
	}
};

export default connect((state) => ({ currentWordList: state.currentWordList, list: state.transformedSentence }), {})(
	withStyles(style)(RhymeList)
);

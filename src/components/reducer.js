import { ACTIONS } from './actions';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

function reducer(
	state = {
		currentSentence: '',
		transformedSentence: []
	},
	action
) {
	switch (action.type) {
		case ACTIONS.STORE_TRANSFORMED:
			return {
				...state,
				transformedSentence: action.data
			};
		case ACTIONS.STORE_SENTENCE:
			return {
				...state,
				currentSentence: action.data
			};
		case ACTIONS.DO_NOTHING:
			return {
				...state
			};
		default:
			return state;
	}
}

const logger = createLogger();

const store = createStore(reducer, applyMiddleware(thunk, promise, logger));

export default store;

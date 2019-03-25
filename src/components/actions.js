import { getList } from '../shared/rhymes';

export const ACTIONS = {
	DO_NOTHING: 'DO_NOTHING',
	STORE_SENTENCE: 'STORE_SENTENCE',
	STORE_TRANSFORMED: 'STORE_TRANSFORMED'
};

export function storeAndTransform(sentence) {
	return (dispatch) => {
		dispatch(storeSentence(sentence));
		dispatch(storeTransformedSentence(sentence));
	};
}

export function storeSentence(sentence) {
	return {
		type: 'STORE_SENTENCE',
		data: sentence
	};
}

export function storeTransformedSentence(sentence) {
	const transformed = getList(sentence);
	return {
		type: 'STORE_TRANSFORMED',
		data: transformed
	};
}

export function doNothing() {
	return {
		type: 'DO_NOTHING',
		data: null
	};
}

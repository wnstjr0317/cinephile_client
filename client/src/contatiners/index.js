const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const SET_DIFF = 'SET_DIFF';

function increment() {
	return {
		type: INCREMENT,
	};
}

function decrement() {
	return {
		type: DECREMENT,
	};
}

function setDiff(value) {
	return {
		type: SET_DIFF,
		diff: value,
	};
}

const counterInitialState = {
	value: 0,
	diff: 1,
};

const counter = (state = counterInitialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return Object.assign({}, state, {
				value: state.value + state.diff,
			});
		case DECREMENT:
			return Object.assign({}, state, {
				value: state.value - state.diff,
			});
		case SET_DIFF:
			return Object.assign({}, state, {
				diff: action.diff,
			});
		default:
			return state;
	}
};
export default counter;

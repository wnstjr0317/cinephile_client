export const SIDEBAR = 'SIDEBAR';

export function toggleSwitch() {
	return {
		type: SIDEBAR,
	};
}

const toggleInitialState = {
	switch: true,
};

const toggle = (state = toggleInitialState, action) => {
	switch (action.type) {
		case SIDEBAR:
			return Object.assign({}, state, {
				switch: !state.switch,
			});
		default:
			return state;
	}
};

export default toggle;

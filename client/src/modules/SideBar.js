const SIDEBAR = 'SIDEBAR';
const LOGIN = 'LOGIN';
const SIGNUP = 'SIGNUP';

//action

export function toggleSwitchAction() {
	return {
		type: SIDEBAR,
	};
}
export function loginSwitchAction() {
	return {
		type: LOGIN,
	};
}
export function signUpSwitchAction() {
	return {
		type: SIGNUP,
	};
}

//action function

const toggleInitialState = {
	toggleSwitch: true,
	loginSwitch: false,
	signUpSwitch: false,
};

const toggleReducer = (state = toggleInitialState, action) => {
	switch (action.type) {
		case SIDEBAR:
			return Object.assign({}, state, {
				toggleSwitch: !state.toggleSwitch,
			});
		case LOGIN:
			return Object.assign({}, state, {
				loginSwitch: !state.loginSwitch,
			});
		case SIGNUP:
			return Object.assign({}, state, {
				signUpSwitch: !state.signUpSwitch,
			});
		default:
			return state;
	}
};

//reducer

export default toggleReducer;

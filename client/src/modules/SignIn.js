const LOGIN_EMAIL = 'LOGIN_EMAIL';
const LOGIN_PASSWORD = 'LOGIN_PASSWORD';

export const loginEmailAction = (loginEmail) => {
	return {
		type: LOGIN_EMAIL,
		loginEmail,
	};
};

export const loginPasswordAction = (loginPassword) => ({
	type: LOGIN_PASSWORD,
	loginPassword,
});

const loginInitialState = {
	loginEmail: '',
	loginPassword: '',
};

const loginReducer = (state = loginInitialState, action) => {
	const { loginEmail, loginPassword } = action;
	switch (action.type) {
		case LOGIN_EMAIL:
			return Object.assign({}, state, {
				loginEmail,
			});
		case LOGIN_PASSWORD:
			return Object.assign({}, state, {
				loginPassword,
			});

		default:
			return state;
	}
};

export default loginReducer;

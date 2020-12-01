const SIGNUP_EMAIL = 'SIGNUP_EMAIL';
const SIGNUP_PASSWORD = 'SIGNUP_PASSWORD';
const SIGNUP_USERNAME = 'SIGNUP_USERNAME';
const SIGNUP_SEX = 'SIGNUP_SEX';
const SIGNUP_AGE = 'SIGNUP_AGE';

export const signUpEmailAction = (signUpEmail) => ({
	type: SIGNUP_EMAIL,
	signUpEmail,
});

export const signUpPasswordAction = (signUpPassword) => ({
	type: SIGNUP_PASSWORD,
	signUpPassword,
});
export const signUpUsernameAction = (signUpUsername) => ({
	type: SIGNUP_USERNAME,
	signUpUsername,
});

export const signUpSexAction = (signUpSex) => ({
	type: SIGNUP_SEX,
	signUpSex,
});
export const signUpAgeAction = (signUpAge) => ({
	type: SIGNUP_AGE,
	signUpAge,
});

const signUpInitialState = {
	signUpEmail: '',
	signUpPassword: '',
	signUpUsername: '',
	signUpSex: 'male',
	signUpAge: '10',
};

const signUpReducer = (state = signUpInitialState, action) => {
	const { signUpEmail, signUpPassword, signUpUsername, signUpSex, signUpAge } = action;
	switch (action.type) {
		case SIGNUP_EMAIL:
			return Object.assign({}, state, {
				signUpEmail,
			});
		case SIGNUP_PASSWORD:
			return Object.assign({}, state, {
				signUpPassword,
			});
		case SIGNUP_USERNAME:
			return Object.assign({}, state, {
				signUpUsername,
			});
		case SIGNUP_SEX:
			return Object.assign({}, state, {
				signUpSex,
			});
		case SIGNUP_AGE:
			return Object.assign({}, state, {
				signUpAge,
			});

		default:
			return state;
	}
};

export default signUpReducer;

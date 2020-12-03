import axios from 'axios';

axios.defaults.withCredentials = true;

const SIGNUP_EMAIL = 'SIGNUP_EMAIL';
const SIGNUP_PASSWORD = 'SIGNUP_PASSWORD';
const SIGNUP_USERNAME = 'SIGNUP_USERNAME';
const SIGNUP_SEX = 'SIGNUP_SEX';
const SIGNUP_AGE = 'SIGNUP_AGE';
const SIGNUP_POST_PENDING = 'SIGNUP_POST_PENDING';
const SIGNUP_POST_SUCCESS = 'SIGNUP_POST_SUCCESS';
const SIGNUP_POST_FAILURE = 'SIGNUP_POST_FAILURE';
//action

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
const signUpPost = async (signUpInfo) => await axios.post(`http://localhost:3000/users/signup`, signUpInfo);

//action function
export const signUpAjaxAction = (signUpInfo) => (dispatch) => {
	dispatch({ type: SIGNUP_POST_PENDING });
	signUpPost(signUpInfo)
		.then((res) => {
			dispatch({
				type: SIGNUP_POST_SUCCESS,
				result: res.data,
			});
		})
		.catch((error) => {
			dispatch({
				type: SIGNUP_POST_FAILURE,
				result: error,
			});
		});
};

//ajax(middleWare)

const signUpInitialState = {
	signUpEmail: '',
	signUpPassword: '',
	signUpUsername: '',
	signUpSex: '성별',
	signUpAge: '나이',
	pending: false,
	error: false,
	isSignUp: false,
};

const signUpReducer = (state = signUpInitialState, action) => {
	const { signUpEmail, signUpPassword, signUpUsername, signUpSex, signUpAge, result } = action;
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
		case SIGNUP_POST_PENDING:
			return Object.assign({}, state, {
				pending: true,
				error: false,
				isSignUp: false,
			});
		case SIGNUP_POST_SUCCESS:
			return Object.assign({}, state, {
				pending: false,
				isSignUp: true,
				result,
			});
		case SIGNUP_POST_FAILURE:
			return Object.assign({}, state, {
				pending: false,
				error: true,
				isSignUp: false,
				result,
			});

		default:
			return state;
	}
};

//reducer

export default signUpReducer;

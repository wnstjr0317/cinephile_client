import axios from 'axios';

axios.defaults.withCredentials = true;
const LOGIN_EMAIL = 'LOGIN_EMAIL';
const LOGIN_PASSWORD = 'LOGIN_PASSWORD';
const SIGNIN_POST_PENDING = 'SIGNIN_POST_PENDING';
const SIGNIN_POST_SUCCESS = 'SIGNIN_POST_SUCCESS';
const SIGNIN_POST_FAILURE = 'SIGNIN_POST_FAILURE';
const LOGOUT = 'LOGOUT';
//action

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
const signInPost = async (signInInfo) => await axios.post(`https://final.cinephile.kro.kr/users/login`, signInInfo);
const signOutPost = async () => await axios.post(`https://final.cinephile.kro.kr/users/logout`);
export const signInAjaxAction = (signInInfo) => (dispatch) => {
	dispatch({ type: SIGNIN_POST_PENDING });
	signInPost(signInInfo)
		.then((res) => {
			dispatch({
				type: SIGNIN_POST_SUCCESS,
				result: res.data,
			});
		})
		.catch((error) => {
			dispatch({
				type: SIGNIN_POST_FAILURE,
				result: error,
			});
		});
};
export const signOutAjaxAction = () => (dispatch) => {
	signOutPost()
		.then((res) => {
			dispatch({
				type: LOGOUT,
				result: res.data,
			});
			document.cookie = 'cookie' + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
			document.cookie = 'token' + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
		})
		.catch((error) => {
			dispatch({
				type: LOGOUT,
				result: error,
			});
		});
};
//action function

//ajax(middleWare)

const loginInitialState = {
	loginEmail: '',
	loginPassword: '',
	pending: false,
	error: false,
	isLogin: false,
	isLogOut: true,
};

const loginReducer = (state = loginInitialState, action) => {
	const { loginEmail, loginPassword, result } = action;
	switch (action.type) {
		case LOGIN_EMAIL:
			return Object.assign({}, state, {
				loginEmail,
			});
		case LOGIN_PASSWORD:
			return Object.assign({}, state, {
				loginPassword,
			});
		case SIGNIN_POST_PENDING:
			return Object.assign({}, state, {
				pending: true,
				error: false,
				isLogin: false,
				isLogOut: true,
			});
		case SIGNIN_POST_SUCCESS:
			return Object.assign({}, state, {
				pending: false,
				isLogin: true,
				isLogOut: false,
				result,
			});
		case SIGNIN_POST_FAILURE:
			return Object.assign({}, state, {
				pending: false,
				error: true,
				isLogin: false,
				isLogOut: true,
				result,
			});
		case LOGOUT:
			return Object.assign({}, state, {
				isLogOut: true,
				isLogin: false,
				result,
			});

		default:
			return state;
	}
};

//reducer

export default loginReducer;

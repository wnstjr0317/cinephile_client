import axios from 'axios';

axios.defaults.withCredentials = true;
const LOGIN_EMAIL = 'LOGIN_EMAIL';
const LOGIN_PASSWORD = 'LOGIN_PASSWORD';
const COOKIE_LOGIN = 'COOKIE_LOGIN';
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
export const cookieLoginAction = (userInfo) => {
	return {
		type: COOKIE_LOGIN,
		userInfo,
	};
};

export const loginPasswordAction = (loginPassword) => ({
	type: LOGIN_PASSWORD,
	loginPassword,
});
const signInPost = async (signInInfo) => await axios.post(`http://localhost:3000/users/login`, signInInfo);
const signOutPost = async () => await axios.post(`http://localhost:3000/users/logout`);
export const signInAjaxAction = (signInInfo) => (dispatch) => {
	dispatch({ type: SIGNIN_POST_PENDING });
	signInPost(signInInfo)
		.then((res) => {
			sessionStorage.setItem('userInfo', JSON.stringify(res.data));
			dispatch({
				type: SIGNIN_POST_SUCCESS,
				userInfo: res.data,
			});
		})
		.catch((error) => {
			alert('로그인 실패');
			dispatch({
				type: SIGNIN_POST_FAILURE,
				error,
			});
		});
};
export const signOutAjaxAction = (e) => (dispatch) => {
	signOutPost()
		.then((res) => {
			sessionStorage.clear();
			document.cookie = 'cookie' + '=; expires=Thu, 25 Oct 1990 00:00:00 GMT;';
			document.cookie = 'token' + '=; expires=Thu, 25 Oct 1990 00:00:10 GMT;';
			dispatch({
				type: LOGOUT,
				userInfo: null,
			});
		})
		.catch((error) => {
			dispatch({
				type: LOGOUT,
				error,
			});
			alert('로그아웃 실패');
		});
};
//action function

//ajax(middleWare)

const loginInitialState = {
	loginEmail: '',
	loginPassword: '',
	pending: false,
	error: false,
	userInfo: null,
};

const loginReducer = (state = loginInitialState, action) => {
	const { loginEmail, loginPassword, userInfo, error } = action;
	switch (action.type) {
		case LOGIN_EMAIL:
			return Object.assign({}, state, {
				loginEmail,
			});
		case LOGIN_PASSWORD:
			return Object.assign({}, state, {
				loginPassword,
			});
		case COOKIE_LOGIN:
			return Object.assign({}, state, {
				userInfo,
			});
		case SIGNIN_POST_PENDING:
			return Object.assign({}, state, {
				pending: true,
				error: false,
			});
		case SIGNIN_POST_SUCCESS:
			return Object.assign({}, state, {
				pending: false,
				userInfo,
			});
		case SIGNIN_POST_FAILURE:
			return Object.assign({}, state, {
				pending: false,
				error,
			});
		case LOGOUT:
			return Object.assign({}, state, {
				error,
				userInfo,
			});

		default:
			return state;
	}
};

//reducer

export default loginReducer;

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
const signInPost = async (signInInfo) => await axios.post(`http://localhost:3000/users/login`, signInInfo);
const signOutPost = async () => await axios.post(`http://localhost:3000/users/logout`);
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
			alert('다시 입력하세요.');
		});
};
export const signOutAjaxAction = () => (dispatch) => {
	signOutPost()
		.then((res) => {
			document.cookie = 'cookie' + '=; expires=Thu, 25 Oct 1990 00:00:00 GMT;';
			document.cookie = 'token' + '=; expires=Thu, 25 Oct 1990 00:00:10 GMT;';
			dispatch({
				type: LOGOUT,
				result: res.data,
			});
		})
		.catch((error) => {
			dispatch({
				type: LOGOUT,
				result: error,
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

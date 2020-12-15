import axios from 'axios';

axios.defaults.withCredentials = true;
const MODIFY_NICKNAME = 'MODIFY_NICKNAME';
const MODIFY_EMAIL = 'MODIFY_EMAIL';
const MODIFY_PASSWORD = 'MODIFY_PASSWORD';
const MODIFY_GENDER = 'MODIFY_GENDER';
const MODIFY_AGE = 'MODIFY_AGE';
const DEFAULT_USERINFO = 'DEFAULT_USERINFO';
const MODIFY_POST_PENDING = 'MODIFY_POST_PENDING';
const MODIFY_POST_SUCCESS = 'MODIFY_POST_SUCCESS';
const MODIFY_POST_FAILURE = 'MODIFY_POST_FAILURE';

//action

export function modifyNicknameAction(nickname) {
	return {
		type: MODIFY_NICKNAME,
		nickname,
	};
}
export function modifyEmailAction(email) {
	return {
		type: MODIFY_EMAIL,
		email,
	};
}
export function modifyPasswordAction(password) {
	return {
		type: MODIFY_PASSWORD,
		password,
	};
}
export function modifyGenderAction(gender) {
	return {
		type: MODIFY_GENDER,
		gender,
	};
}

export function modifyAgeAction(age) {
	return {
		type: MODIFY_AGE,
		age,
	};
}
export function defalutUserInfoAction(modifyUserInfo) {
	return {
		type: DEFAULT_USERINFO,
		modifyUserInfo,
	};
}
//action function

const modifyUserInfoPost = async (userInfo) => {
	console.log(userInfo);
	if (Array.isArray(userInfo)) {
		console.log(userInfo[0]);
		return await axios.post(`http://localhost:3000/setting/userinfo`, userInfo[0]);
	} else {
		return await axios.post(`http://localhost:3000/setting/userinfo`, userInfo);
	}
};
const modifyUserInfo = {
	nickname: '',
	password: '',
	email: '',
	age: '',
	gender: '',
	modifyUserInfo: null,
	error: false,
	pending: true,
};

export const modifyUserInfoAjaxAction = (userInfo) => (dispatch) => {
	dispatch({ type: MODIFY_POST_PENDING });
	console.log(userInfo);
	modifyUserInfoPost(userInfo)
		.then((res) => {
			console.log(res);
			// eslint-disable-next-line no-useless-concat
			document.cookie = 'oauth_id' + '=; expires=Thu, 25 Oct 1990 00:00:10 GMT;';
			Array.isArray(userInfo) ? sessionStorage.setItem('userInfo', JSON.stringify(userInfo[0])) : sessionStorage.setItem('userInfo', JSON.stringify(userInfo));

			dispatch({
				type: MODIFY_POST_SUCCESS,
				result: res.data,
			});
		})
		.catch((error) => {
			console.log(error);
			dispatch({
				type: MODIFY_POST_FAILURE,
				error,
			});
		});
};

const userInfoReducer = (state = modifyUserInfo, action) => {
	const { nickname, password, email, result, gender, age, modifyUserInfo, error } = action;
	switch (action.type) {
		case DEFAULT_USERINFO:
			return Object.assign({}, state, {
				modifyUserInfo,
			});
		case MODIFY_NICKNAME:
			return Object.assign({}, state, {
				nickname,
			});
		case MODIFY_EMAIL:
			return Object.assign({}, state, {
				email,
			});
		case MODIFY_PASSWORD:
			return Object.assign({}, state, {
				password,
			});
		case MODIFY_GENDER:
			return Object.assign({}, state, {
				gender,
			});
		case MODIFY_AGE:
			return Object.assign({}, state, {
				age,
			});
		case MODIFY_POST_PENDING:
			return Object.assign({}, state, {
				pending: true,
				error: false,
			});
		case MODIFY_POST_SUCCESS:
			return Object.assign({}, state, {
				result,
				pending: false,
				error: false,
			});
		case MODIFY_POST_FAILURE:
			return Object.assign({}, state, {
				error,
				pending: false,
			});
		default:
			return state;
	}
};

//reducer

export default userInfoReducer;

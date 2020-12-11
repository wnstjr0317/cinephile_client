import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModifyUserInfo from '../components/userInfo/ModifyUserInfo';
import { cookieLoginAction } from '../modules/SignIn';
import { modifyUserInfoAjaxAction, modifyNicknameAction, modifyPasswordAction, modifyEmailAction, modifyAgeAction, modifyGenderAction } from '../modules/UserInfo';

const userInfo = ({ match, history }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const dispatch = useDispatch();
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { modifyNickname, loginUserInfo, modifyPassword, modifyAge, modifyGender, modifyEmail } = useSelector((state) => ({
		modifyNickname: state.UserInfo.nickname,
		modifyPassword: state.UserInfo.password,
		modifyAge: state.UserInfo.age,
		modifyGender: state.UserInfo.gender,
		modifyEmail: state.UserInfo.email,
		loginUserInfo: state.SignIn.userInfo,
	}));
	// eslint-disable-next-line react-hooks/rules-of-hooks

	// eslint-disable-next-line react-hooks/rules-of-hooks

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const autoCookieLogin = useCallback(
		(sign) => {
			dispatch(cookieLoginAction(sign));
		},
		[dispatch]
	);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const modifyUserInfoPost = useCallback(
		(userInfo) => {
			dispatch(modifyUserInfoAjaxAction(userInfo));
		},
		[dispatch]
	);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const nickNameChangeInput = useCallback(
		(nickname) => {
			dispatch(modifyNicknameAction(nickname));
		},
		[dispatch]
	);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const passwordChangeInput = useCallback(
		(password) => {
			dispatch(modifyPasswordAction(password));
		},
		[dispatch]
	);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const emailChangeInput = useCallback(
		(email) => {
			dispatch(modifyEmailAction(email));
		},
		[dispatch]
	);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const ageChangeSelect = useCallback(
		(age) => {
			dispatch(modifyAgeAction(age));
		},
		[dispatch]
	);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const genderChangeSelect = useCallback(
		(gender) => {
			dispatch(modifyGenderAction(gender));
		},
		[dispatch]
	);

	return (
		<div className="main">
			<ModifyUserInfo
				autoCookieLogin={autoCookieLogin}
				modifyUserInfoPost={modifyUserInfoPost}
				modifyAge={modifyAge}
				emailChangeInput={emailChangeInput}
				modifyEmail={modifyEmail}
				passwordChangeInput={passwordChangeInput}
				modifyPassword={modifyPassword}
				loginUserInfo={loginUserInfo}
				modifyNickname={modifyNickname}
				nickNameChangeInput={nickNameChangeInput}
				modifyGender={modifyGender}
				genderChangeSelect={genderChangeSelect}
				ageChangeSelect={ageChangeSelect}
			/>
		</div>
	);
};

export default React.memo(userInfo);

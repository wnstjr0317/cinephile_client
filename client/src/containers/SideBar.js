import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SideBar from '../components/sideBar/index';
import { toggleSwitchAction, loginSwitchAction, signUpSwitchAction } from '../modules/SideBar';
import { loginEmailAction, signInAjaxAction, signOutAjaxAction, loginPasswordAction } from '../modules/SignIn';
import { signUpAjaxAction, signUpPasswordAction, signUpEmailAction, signUpUsernameAction, signUpSexAction, signUpAgeAction } from '../modules/SignUp';
import SignIn from '../components/sideBar/SignIn';
import SignUp from '../components/sideBar/SignUp';
const containerSideBar = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { toggleSwitch, signUpSex, loginSwitch, signUpSwitch, loginEmail, loginPassword, signUpUsername, signUpPassword, signUpEmail, signUpAge, isSignUp, isLogin, isLogOut } = useSelector(
		(state) => ({
			toggleSwitch: state.SideBar.toggleSwitch,
			loginSwitch: state.SideBar.loginSwitch,
			signUpSwitch: state.SideBar.signUpSwitch,
			loginEmail: state.SignIn.loginEmail,
			loginPassword: state.SignIn.loginPassword,
			signUpPassword: state.SignUp.signUpPassword,
			signUpEmail: state.SignUp.signUpEmail,
			signUpUsername: state.SignUp.signUpUsername,
			signUpSex: state.SignUp.signUpSex,
			signUpAge: state.SignUp.signUpAge,
			isSignUp: state.SignUp.isSignUp,
			isLogin: state.SignIn.isLogin,
			isLogOut: state.SignIn.isLogOut,
		})
	);
	//회원가입만 알림, 로그인 및 로그아웃은 알림 없음 => 사이드 바 렌더링 변경만!
	//useSelector 사용하여 state 값 호출

	const modalSwitch = (sign) => {
		return sign ? { display: 'block' } : { display: 'none' };
	};
	// 모달창 on&off 헬퍼 함수

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const dispatch = useDispatch();

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const toggle = useCallback(() => {
		dispatch(toggleSwitchAction());
	}, [dispatch]);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const loginModal = useCallback(() => {
		dispatch(loginSwitchAction());
	}, [dispatch]);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const signUpModal = useCallback(() => {
		dispatch(signUpSwitchAction());
	}, [dispatch]);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const loginEmailInput = useCallback(
		(e) => {
			dispatch(loginEmailAction(e));
		},
		[dispatch]
	);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const loginPasswordInput = useCallback(
		(e) => {
			dispatch(loginPasswordAction(e));
		},
		[dispatch]
	);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const signUpPasswordInput = useCallback(
		(e) => {
			dispatch(signUpPasswordAction(e));
		},
		[dispatch]
	);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const signUpUsernameInput = useCallback(
		(e) => {
			dispatch(signUpUsernameAction(e));
		},
		[dispatch]
	);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const signUpEmailInput = useCallback(
		(e) => {
			dispatch(signUpEmailAction(e));
		},
		[dispatch]
	);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const signUpSexSelect = useCallback(
		(e) => {
			dispatch(signUpSexAction(e));
		},
		[dispatch]
	);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const signUpAgeSelect = useCallback(
		(e) => {
			dispatch(signUpAgeAction(e));
		},
		[dispatch]
	);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const signUpAjax = useCallback(
		(e) => {
			dispatch(signUpAjaxAction(e));
		},
		[dispatch]
	);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const signInAjax = useCallback(
		(e) => {
			dispatch(signInAjaxAction(e));
		},
		[dispatch]
	);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const signOutAjax = useCallback(
		(e) => {
			dispatch(signOutAjaxAction(e));
		},
		[dispatch]
	);
	// state 끌어올리기를 이용하여 modules에서 생성한 액션 생성 함수에 인자 e를 넣어 dispatch.
	// useCallback으로 dispatch가 될 때마다 액션 함수 호출

	//useEffect로 componentDidUpdate 설정

	return (
		<>
			<SideBar
				toggle={toggle}
				signOutAjax={signOutAjax}
				isLogOut={isLogOut}
				toggleSwitch={toggleSwitch}
				signUpSwitch={signUpSwitch}
				loginSwitch={loginSwitch}
				loginModal={loginModal}
				signUpModal={signUpModal}
			/>
			<SignIn
				signInAjax={signInAjax}
				loginPasswordInput={loginPasswordInput}
				loginEmailInput={loginEmailInput}
				loginEmail={loginEmail}
				loginPassword={loginPassword}
				modalSwitch={modalSwitch}
				loginModal={loginModal}
				loginSwitch={loginSwitch}
				isLogin={isLogin}
			/>
			<SignUp
				signUpEmail={signUpEmail}
				signUpPassword={signUpPassword}
				signUpUsername={signUpUsername}
				modalSwitch={modalSwitch}
				signUpEmailInput={signUpEmailInput}
				signUpUsernameInput={signUpUsernameInput}
				signUpPasswordInput={signUpPasswordInput}
				signUpModal={signUpModal}
				signUpSwitch={signUpSwitch}
				signUpSexSelect={signUpSexSelect}
				signUpSex={signUpSex}
				signUpAgeSelect={signUpAgeSelect}
				signUpAge={signUpAge}
				signUpAjax={signUpAjax}
				isSignUp={isSignUp}
			/>
		</>
	);
};

export default React.memo(containerSideBar);

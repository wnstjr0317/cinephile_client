import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SideBar from '../components/SideBar';
import { toggleSwitchAction, loginSwitchAction, signUpSwitchAction } from '../modules/SideBar';
import { loginEmailAction, loginPasswordAction } from '../modules/SignIn';
import { signUpPasswordAction, signUpEmailAction, signUpUsernameAction, signUpSexAction, signUpAgeAction } from '../modules/SignUp';
import SignIn from '../components/SideBar/SignIn';
import SignUp from '../components/SideBar/SignUp';
const containerSideBar = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { toggleSwitch, signUpSex, loginSwitch, signUpSwitch, loginEmail, loginPassword, signUpUsername, signUpPassword, signUpEmail, signUpAge } = useSelector((state) => ({
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
	}));

	//useSelector 사용

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

	// useCallback으로 dispatch가 될 때마다 액션 함수 호출

	return (
		<>
			<SideBar toggle={toggle} toggleSwitch={toggleSwitch} signUpSwitch={signUpSwitch} loginSwitch={loginSwitch} loginModal={loginModal} signUpModal={signUpModal} />
			<SignIn
				loginPasswordInput={loginPasswordInput}
				loginEmailInput={loginEmailInput}
				loginEmail={loginEmail}
				loginPassword={loginPassword}
				modalSwitch={modalSwitch}
				loginModal={loginModal}
				loginSwitch={loginSwitch}
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
			/>
		</>
	);
};

export default containerSideBar;

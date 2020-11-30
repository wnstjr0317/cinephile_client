import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SideBar from '../components/SideBar';
import { toggleSwitchAction, loginSwitchAction, signUpSwitchAction } from '../modules/SideBar';
import SignIn from '../components/SideBar/SignIn';
import SignUp from '../components/SideBar/SignUp';
const containerSideBar = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { toggleSwitch, loginSwitch, signUpSwitch } = useSelector((state) => ({
		toggleSwitch: state.SideBar.toggleSwitch,
		loginSwitch: state.SideBar.loginSwitch,
		signUpSwitch: state.SideBar.signUpSwitch,
	}));

	const modalSwitch = (sign) => {
		return sign ? { display: 'block' } : { display: 'none' };
	};

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
	return (
		<>
			<SideBar toggle={toggle} toggleSwitch={toggleSwitch} loginModal={loginModal} signUpModal={signUpModal} />
			<SignIn modalSwitch={modalSwitch} loginSwitch={loginSwitch} />
			<SignUp modalSwitch={modalSwitch} signUpSwitch={signUpSwitch} />
		</>
	);
};

export default containerSideBar;

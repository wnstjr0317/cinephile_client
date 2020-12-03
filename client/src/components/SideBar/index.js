import React from 'react';
import './SideBar.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const SideBar = ({ signOutAjax, toggleSwitch, signUpSwitch, loginSwitch, toggle, loginModal, signUpModal }) => {
	const toggleEventHandler = () => {
		return toggleSwitch
			? { transform: 'translateX(0px)', width: '25%', transition: 'all 3s', opacity: 1 }
			: { transform: 'translateX(-500px)', width: '0%', opacity: 0, transition: 'all 3s', color: 'white' };
	};
	console.log(document.cookie);

	return (
		<>
			<div className="sideBarToggle" onClick={toggle}>
				≡
			</div>
			<div className="sideBar" style={toggleEventHandler()}>
				<span>chiione님 반갑습니다.</span>
				<div className="signIn" onClick={() => !signUpSwitch && loginSwitch === false && loginModal()}>
					로그인
				</div>
				<div className="signUp" onClick={() => !loginSwitch && signUpSwitch === false && signUpModal()}>
					회원가입
				</div>
				<div onClick={signOutAjax}>로그아웃</div>
			</div>
		</>
	);
};

export default SideBar;

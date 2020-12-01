import React from 'react';
import './SideBar.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = ({ toggleSwitch, signUpSwitch, loginSwitch, toggle, loginModal, signUpModal }) => {
	const toggleEventHandler = () => {
		return toggleSwitch ? { transform: 'translateX(0px)', transition: 'all 1.5s' } : { transform: 'translateX(-500px)', transition: 'all 2s' };
	};

	return (
		<>
			<FontAwesomeIcon icon={faUser} className="icon" onClick={toggle} />
			<div className="sideBar" style={toggleEventHandler()}>
				<div className="signIn" onClick={!signUpSwitch && loginSwitch === false && loginModal}>
					로그인
				</div>
				<div className="signUp" onClick={!loginSwitch && signUpSwitch === false && signUpModal}>
					회원가입
				</div>
			</div>
		</>
	);
};

export default SideBar;

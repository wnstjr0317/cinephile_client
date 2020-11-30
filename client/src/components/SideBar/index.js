import React from 'react';
import './SideBar.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = ({ toggleSwitch, toggle, loginModal, signUpModal }) => {
	const toggleEventHandler = () => {
		return toggleSwitch ? { transform: 'translateX(0px)', transition: 'all 1.5s' } : { transform: 'translateX(-500px)', transition: 'all 2s' };
	};

	return (
		<>
			<FontAwesomeIcon icon={faUser} className="icon" onClick={toggle} />
			<div className="sideBar" style={toggleEventHandler()}>
				<div className="signIn" onClick={loginModal}>
					login
				</div>
				<div className="signUp" onClick={signUpModal}>
					signIn
				</div>
			</div>
		</>
	);
};

export default SideBar;

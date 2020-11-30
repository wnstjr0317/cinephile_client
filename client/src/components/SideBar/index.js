import React from 'react';
import './SideBar.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './Nav';

const SideBar = ({ switches, toggle }) => {
	const toggleEventHandler = () => {
		return switches ? { transform: 'translateX(0px)', transition: 'all 1.5s' } : { transform: 'translateX(-500px)', transition: 'all 2s' };
	};
	return (
		<>
			<FontAwesomeIcon icon={faUser} className="icon" onClick={toggle} />
			<div className="sideBar" style={toggleEventHandler()}>
				<Nav></Nav>
			</div>
		</>
	);
};

export default SideBar;

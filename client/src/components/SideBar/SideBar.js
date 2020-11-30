import React from 'react';
import './SideBar.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './Nav';

const SideBar = () => {
	return (
		<div className="sideBar">
			<FontAwesomeIcon icon={faUser} className="icon" />
			<Nav></Nav>
		</div>
	);
};

export default SideBar;

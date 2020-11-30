import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SideBar from '../components/SideBar';
import { toggleSwitch } from '../modules/SideBar';

const containerSideBar = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { switches } = useSelector((state) => ({
		switches: state.SideBar.switch,
	}));

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const dispatch = useDispatch();
	const toggle = () => dispatch(toggleSwitch());
	return <SideBar toggle={toggle} switches={switches} />;
};

export default containerSideBar;

/* eslint-disable no-undef */
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CreateText from '../components/write/CreateText';
import SearchMovie from '../components/write/SearchMovie';
import '../App.css';

const Write = () => {
	const { userInfo } = useSelector((state) => ({
		userInfo: state.SignIn.userInfo
		// 유저 정보 관리를 못 찾것다...
	}));
	
	return (
		<div className="main">
			{/* <CreateText userInfo={userInfo} /> */}
			<SearchMovie userInfo={userInfo} />
		</div>
	);
};

export default React.memo(Write);

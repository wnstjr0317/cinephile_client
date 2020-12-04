import React, { useEffect } from 'react';
import './SideBar.css';

const SideBar = ({ isLogOut, signOutAjax, toggleSwitch, signUpSwitch, loginSwitch, toggle, loginModal, signUpModal }) => {
	const toggleEventHandler = () => {
		return toggleSwitch
			? { transform: 'translateX(0px)', width: '25%', transition: 'all 2.5s', opacity: 1 }
			: { transform: 'translateX(-500px)', width: '0%', opacity: 0, transition: 'all 2s', color: 'white' };
	};

	const cookie = document.cookie.split(';').some((cookie) => cookie.includes('token') || cookie.includes('cookie'));
	useEffect(() => {
		console.log(isLogOut);
	}, [isLogOut]);
	return (
		<>
			<div className="sideBarToggle" onClick={toggle}>
				≡
			</div>
			{cookie ? (
				<div className="sideBar" style={toggleEventHandler()}>
					<span>chiione님 반갑습니다.</span>
					<div className="signIn" onClick={() => !signUpSwitch && loginSwitch === false && loginModal()}>
						마이 인포
					</div>
					<div
						className="logout"
						onClick={() => {
							signOutAjax();
						}}
					>
						로그아웃
					</div>
				</div>
			) : (
				<div className="sideBar" style={toggleEventHandler()}>
					<span>로그인을 해주세요.</span>
					<div className="signIn" onClick={() => !signUpSwitch && loginSwitch === false && loginModal()}>
						로그인
					</div>
					<div className="signUp" onClick={() => !loginSwitch && signUpSwitch === false && signUpModal()}>
						회원가입
					</div>
				</div>
			)}
		</>
	);
};

export default SideBar;

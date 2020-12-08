import React, { useEffect } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = ({ isLogOut, signOutAjax, toggleSwitch, signUpSwitch, loginSwitch, toggle, loginModal, signUpModal }) => {
	const toggleEventHandler = () => {
		return toggleSwitch
			? { transform: 'translateX(0px)', width: '16.7%', transition: 'all 2.5s', opacity: 0.4, marginLeft: '-25px' }
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
					<ul>
						<img src="" alt="" />
						<span>chiione님</span>
						<li className="signIn" onClick={() => !signUpSwitch && loginSwitch === false && loginModal()}>
							마이 인포
						</li>
						<li
							className="logout"
							onClick={() => {
								signOutAjax();
							}}
						>
							로그아웃
						</li>
						<Link className="board" to="/board">
							Board
						</Link>
					</ul>
				</div>
			) : (
				<div className="sideBar" style={toggleEventHandler()}>
					<ul>
						<span>로그인을 해주세요.</span>
						<li className="signIn" onClick={() => !signUpSwitch && loginSwitch === false && loginModal()}>
							로그인
						</li>
						<li className="signUp" onClick={() => !loginSwitch && signUpSwitch === false && signUpModal()}>
							회원가입
						</li>
						<Link className="board" to="/board">
							Board
						</Link>
					</ul>
				</div>
			)}
		</>
	);
};

export default SideBar;

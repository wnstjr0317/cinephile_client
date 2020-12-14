import React, { useEffect } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = ({ defaultUserInfo, signInAjax, autoCookieLogin, userInfo, signOutAjax, toggleSwitch, signUpSwitch, loginSwitch, toggle, loginModal, signUpModal }) => {
	const toggleEventHandler = () => {
		return toggleSwitch
			? { transform: 'translateX(0px)', width: '22%', transition: 'all 2.5s', opacity: 0.4, marginLeft: '-25px' }
			: { transform: 'translateX(-500px)', width: '0%', opacity: 0, transition: 'all 2s', color: 'white' };
	};

	const cookie = document.cookie.split(';').some((cookie) => cookie.includes('token') || cookie.includes('cookie'));
	const authenticate = JSON.parse(sessionStorage.getItem('userInfo'));
	useEffect(() => {
		if (cookie) {
			let sotialKey = document.cookie.split(';').filter((string) => string.slice(0, 8) === 'oauth_id')[0];
			sotialKey && signInAjax(sotialKey.split('='));
			autoCookieLogin(JSON.parse(sessionStorage.getItem('userInfo')));
			defaultUserInfo(JSON.parse(sessionStorage.getItem('userInfo')));
		} else {
			return () => {
				autoCookieLogin(null);
			};
		}
	}, []);

	return (
		<>
			<div className="sideBarToggle" onClick={toggle}>
				≡
			</div>
			{authenticate ? (
				<div className="sideBar" style={toggleEventHandler()}>
					{
						<ul>
							<FontAwesomeIcon icon={faUser} className="userIcon" />
							<span className="nickName"> {authenticate.nickname} 님</span>
							<Link to="/userInfo" className="sideBarList" id="firstLi">
								My Info
							</Link>
							<Link className="sideBarList" to="/board">
								Board
							</Link>
							<li
								className="sideBarList"
								onClick={() => {
									signOutAjax();
									window.location.href = 'http://localhost:3001/';
								}}
							>
								LogOut
							</li>
						</ul>
					}
				</div>
			) : (
				<div className="sideBar" style={toggleEventHandler()}>
					<ul>
						<FontAwesomeIcon icon={faUser} className="userIcon" />
						<span className="nickName">로그인을 해주세요.</span>
						<li className="sideBarList" onClick={() => !signUpSwitch && loginSwitch === false && loginModal()}>
							로그인
						</li>
						<li className="sideBarList" onClick={() => !loginSwitch && signUpSwitch === false && signUpModal()}>
							회원가입
						</li>
						<Link className="sideBarList" to="/board">
							Board
						</Link>
					</ul>
				</div>
			)}
		</>
	);
};

export default SideBar;

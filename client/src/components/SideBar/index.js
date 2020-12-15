import React, { useEffect } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = ({ modifyUserInfoPost, defaultUserInfo, signInAjax, autoCookieLogin, userInfo, signOutAjax, toggleSwitch, signUpSwitch, loginSwitch, toggle, loginModal, signUpModal }) => {
	const toggleEventHandler = () => {
		return toggleSwitch ? { display: 'none' } : { display: 'block' };
	};

	const cookie = document.cookie.split('; ').some((cookie) => cookie.includes('token') || cookie.includes('cookie') || cookie.includes('oauth_id'));
	const authenticate = JSON.parse(sessionStorage.getItem('userInfo'));
	useEffect(() => {
		if (cookie) {
			let aouth = document.cookie.split('; ').filter((string) => string.slice(0, 8) === 'oauth_id')[0];
			let sotialKey = document.cookie.split('; ').filter((string) => string.slice(0, 4) === 'user')[0];
			console.log(sotialKey);
			sotialKey && signInAjax(sotialKey.split('='));
			// modifyUserInfoPost(JSON.parse(sessionStorage.getItem('userInfo')));
			aouth && signUpModal();
			// sotialKey && modifyUserInfoPost([JSON.parse(sessionStorage.getItem('userInfo'))]);
			autoCookieLogin(JSON.parse(sessionStorage.getItem('userInfo')));
			defaultUserInfo(JSON.parse(sessionStorage.getItem('userInfo')));
		} else {
			return () => {
				autoCookieLogin(null);
			};
		}
	}, [autoCookieLogin, cookie, defaultUserInfo, signInAjax, modifyUserInfoPost, signUpModal]);

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
							<Link className="sideBarList" to="/chat">
								Chatting Room
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

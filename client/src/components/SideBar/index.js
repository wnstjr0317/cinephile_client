import React, { useEffect } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = ({ modifyUserInfoPost, defaultUserInfo, signInAjax, autoCookieLogin, signOutAjax, signUpSwitch, loginSwitch, loginModal, signUpModal }) => {
	const cookie = document.cookie.split('; ').some((cookie) => cookie.includes('token') || cookie.includes('cookie') || cookie.includes('oauth_id'));
	const authenticate = JSON.parse(sessionStorage.getItem('userInfo'));
	console.log(cookie);
	useEffect(() => {
		if (cookie) {
			let aouth = document.cookie.split('; ').filter((string) => string.slice(0, 8) === 'oauth_id')[0];
			let sotialKey = document.cookie.split('; ').filter((string) => string.slice(0, 4) === 'user')[0];
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
			{authenticate ? (
				<>
					<div className="loginAppear">
						<FontAwesomeIcon icon={faUser} className="userIcon" />
						<span className="nickName"> {authenticate.nickname} 님</span>
					</div>

					<ul className="navUl">
						<Link to="/userInfo" className="sideBarList">
							My Info
						</Link>
						<Link className="sideBarList" to="/board">
							Board
						</Link>
						<Link
							to="/"
							className="sideBarList"
							onClick={() => {
								signOutAjax();
							}}
						>
							LogOut
						</Link>
					</ul>
				</>
			) : (
				<>
					<div className="loginAppear">
						<FontAwesomeIcon icon={faUser} className="userIcon" />
						<span className="nickName" onClick={() => !signUpSwitch && loginSwitch === false && loginModal()}>
							로그인을 해주세요.
						</span>
					</div>

					<ul className="navUl">
						<Link className="sideBarList" onClick={() => !signUpSwitch && loginSwitch === false && loginModal()}>
							로그인
						</Link>
						<Link className="sideBarList" onClick={() => !loginSwitch && signUpSwitch === false && signUpModal()}>
							회원가입
						</Link>
						<Link className="sideBarList" to="/board">
							Board
						</Link>
					</ul>
				</>
			)}
		</>
	);
};

export default SideBar;

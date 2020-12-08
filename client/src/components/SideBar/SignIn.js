import React, { useState, useEffect } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
require('dotenv').config();

const SignIn = ({ isLogin, signInAjax, loginSwitch, modalSwitch, loginModal, loginPassword, loginEmail, loginEmailInput, loginPasswordInput }) => {
	const inputReset = () => {
		loginEmailInput('');
		loginPasswordInput('');
		loginModal();
	};
	const [certificate, setCertificate] = useState({
		email: '#ff8787',
		password: '#ff8787',
	});

	useEffect(() => {
		console.log(certificate);

		if (isLogin) {
			alert('로그인 완료');
			inputReset();
		}
	}, [certificate.email, certificate.password, isLogin]);
	const singInHandler = (e) => {
		e.preventDefault();
		if (loginEmail.length < 12) {
			alert('email');
		} else if (loginPassword.length < 8) {
			alert('password');
		} else {
			signInAjax({ email: loginEmail, password: loginPassword });
			console.log('signIn: ', isLogin);
			console.log('email:', loginEmail);
			console.log('password: ', loginPassword);
		}
	};

	return (
		<div className="modal" style={modalSwitch(loginSwitch)}>
			<div className="modalExit" onClick={inputReset}>
				X
			</div>
			<form onSubmit={(e) => singInHandler(e)}>
				<input
					className="sideBarInput"
					required="required"
					value={loginEmail}
					type="email"
					placeholder="email"
					onChange={(e) => {
						if (e.target.value.length < 12) {
							setCertificate(Object.assign({}, certificate, { email: 'ff8787' }));
						} else {
							setCertificate(Object.assign({}, certificate, { email: 'black' }));
						}
						loginEmailInput(e.target.value);
					}}
				/>
				<FontAwesomeIcon icon={faUser} style={{ color: certificate.email }} />
				<input
					className="sideBarInput"
					required="required"
					value={loginPassword}
					type="password"
					placeholder="password"
					onChange={(e) => {
						if (e.target.value.length < 8) {
							setCertificate(Object.assign({}, certificate, { password: 'ff8787' }));
						} else {
							setCertificate(Object.assign({}, certificate, { password: 'black' }));
						}
						loginPasswordInput(e.target.value);
					}}
				/>
				<FontAwesomeIcon icon={faUser} style={{ color: certificate.password }} />

				<button className="sideBaButton" type="submit">
					SignIn
				</button>
			</form>
			{/* <button className="sideBaButton">
				<a href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI_KA}`}>카카오톡 로그인</a>
			</button>
			<button className="sideBaButton">
				<a href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI_NA}&state=test`}>네이버 로그인</a>
			</button>
			<button className="sideBaButton">
				<a href={`https://www.facebook.com/v9.0/dialog/oauth?client_id=${APP_ID}&redirect_uri=${REDIRECT_URI_FA}&state=test`}>페이스북 로그인</a>
			</button>
			<button className="sideBaButton">
				<a href={`https://final.cinephile.kro.kr/users/kakao/unlink`}>연결 끊기</a>
			</button> */}
		</div>
	);
};
export default SignIn;

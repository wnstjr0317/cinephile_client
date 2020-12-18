import React, { useState } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
require('dotenv').config();

const SignIn = ({ signInAjax, loginSwitch, modalSwitch, loginModal, loginPassword, loginEmail, loginEmailInput, loginPasswordInput }) => {
	const inputReset = () => {
		loginModal();
	};
	// eslint-disable-next-line no-undef
	const [certificate, setCertificate] = useState({
		email: '#f06595',
		password: '#f06595',
	});

	const singInHandler = (e) => {
		e.preventDefault();
		if (loginEmail.length < 1) {
			alert('email');
		} else if (loginPassword.length < 1) {
			alert('password');
		} else {
			signInAjax({ email: loginEmail, password: loginPassword });
			loginModal();

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
						if (e.target.value.length > 12) {
							setCertificate(Object.assign({}, certificate, { email: '74b816' }));
						}
						loginEmailInput(e.target.value);
					}}
				/>
				<FaChevronCircleDown className="checker" style={{ color: certificate.email }} />
				<input
					className="sideBarInput"
					required="required"
					value={loginPassword}
					type="password"
					placeholder="password"
					onChange={(e) => {
						if (e.target.value.length > 8) {
							setCertificate(Object.assign({}, certificate, { password: '74b816' }));
						}
						loginPasswordInput(e.target.value);
					}}
				/>
				<FaChevronCircleDown className="checker" style={{ color: certificate.password }} />
				<button className="sideBarButton" type="submit">
					SignIn
				</button>
			</form>
			<button className="sideBarButton">
				<a
					className="sotialLoginButton"
					href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI_KA}`}
				>
					카카오톡 로그인
				</a>
			</button>
			<button className="sideBarButton">
				<a
					className="sotialLoginButton"
					href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI_NA}&state=test`}
				>
					네이버 로그인
				</a>
			</button>
			<button className="sideBarButton">
				<a className="sotialLoginButton" href={`https://www.facebook.com/v9.0/dialog/oauth?client_id=${process.env.REACT_APP_APP_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI_FA}&state=test`}>
					페이스북 로그인
				</a>
			</button>
		</div>
	);
};
export default SignIn;

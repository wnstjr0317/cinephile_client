import React, { useState, useEffect } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SignIn = ({ signInAjax, loginSwitch, modalSwitch, loginModal, loginPassword, loginEmail, loginEmailInput, loginPasswordInput }) => {
	const inputReset = () => {
		loginEmailInput('');
		loginPasswordInput('');
		loginModal();
	};
	const [certificate, setCertificate] = useState({
		email: '#ff8787',
		password: '#ff8787',
	});

	useEffect(() => {}, [certificate.email, certificate.password]);
	const singInHandler = (e) => {
		e.preventDefault();
		if (loginEmail.length < 12) {
			alert('email');
		} else if (loginPassword.length < 10) {
			alert('password');
		} else {
			alert('회원가입 완료');
			signInAjax({ email: loginEmail, password: loginPassword });
			console.log('email:', loginEmail);
			console.log('password: ', loginPassword);
			inputReset();
		}

		// alert('회원 정보를 다시 확인해 주세요.');
	};
	return (
		<div className="modal" style={modalSwitch(loginSwitch)}>
			<div className="modalExit" onClick={inputReset}>
				X
			</div>
			<form onSubmit={(e) => singInHandler(e)}>
				<input
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

				<button className="signin__button" type="submit">
					SignIn
				</button>
			</form>
			<button className="signin__button">
				<a href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=738ab2caacd62503182dcef1f05fb1dc&redirect_uri=http://localhost:3000/users/kakao`}>카카오톡 로그인</a>
			</button>
			<button className="signin__button">
				<a href={`http://localhost:3000/users/kakao/unlink`}>연결 끊기</a>
			</button>
		</div>
	);
};
export default SignIn;

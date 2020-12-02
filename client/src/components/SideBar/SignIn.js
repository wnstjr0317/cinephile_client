import React from 'react';
import axios from 'axios';

const SignIn = ({ signInAjax, loginSwitch, modalSwitch, loginModal, loginPassword, loginEmail, loginEmailInput, loginPasswordInput }) => {
	const inputReset = () => {
		loginEmailInput('');
		loginPasswordInput('');
		loginModal();
	};
	const singInHandler = () => {
		signInAjax({ email: loginEmail, password: loginPassword });
		console.log('email:', loginEmail);
		console.log('password: ', loginPassword);
		inputReset();
		// alert('회원 정보를 다시 확인해 주세요.');
	};

	return (
		<div className="modal" style={modalSwitch(loginSwitch)}>
			<span onClick={inputReset}> x</span>
			<hr />
			<input className="email" value={loginEmail} type="text" placeholder="email" onChange={(e) => loginEmailInput(e.target.value)} />
			<input className="password" value={loginPassword} type="text" placeholder="password" onChange={(e) => loginPasswordInput(e.target.value)} />
			<a href="https://final.cinephile.kro.kr/kakao">social</a>
			<button className="signin__button" onClick={singInHandler}>
				SignIn
			</button>
		</div>
	);
};
export default SignIn;

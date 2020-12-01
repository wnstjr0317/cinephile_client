import React from 'react';
import axios from 'axios';

const SignIn = ({ loginSwitch, modalSwitch, loginModal, loginPassword, loginEmail, loginEmailInput, loginPasswordInput }) => {
	const singInHandler = async () => {
		if (loginEmail === '' || loginPassword === '') {
			alert('회원 정보를 입력해 주세요');
		} else {
			// const res = await axios
			// 	.post('/login', {
			// 		loginEmail,
			// 		loginPassword,
			// 	})
			// 	.catch((error) => {
			// 		console.log(error);
			// 		console.log('email: ', loginEmail);
			// 		console.log('password: ', loginPassword);
			// 	});
			console.log('email:', loginEmail);
			console.log('password: ', loginPassword);
			loginEmailInput('');
			loginPasswordInput('');
			// alert('회원 정보를 다시 확인해 주세요.');
			loginModal();
		}
	};

	return (
		<div className="modal" style={modalSwitch(loginSwitch)}>
			<span onClick={loginModal}> x</span>
			<hr />
			<input className="email" value={loginEmail} type="text" placeholder="email" onChange={(e) => loginEmailInput(e.target.value)} />
			<input className="password" value={loginPassword} type="text" placeholder="password" onChange={(e) => loginPasswordInput(e.target.value)} />
			<button className="signin__button" onClick={singInHandler}>
				SignIn
			</button>
		</div>
	);
};
export default SignIn;

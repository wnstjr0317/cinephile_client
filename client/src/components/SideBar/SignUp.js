import React, { useState, useEffect } from 'react';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SignUp = ({
	signUpSwitch,
	modalSwitch,
	signUpSex,
	signUpAge,
	signUpAgeSelect,
	signUpSexSelect,
	signUpPasswordInput,
	signUpEmailInput,
	signUpUsernameInput,
	signUpModal,
	signUpUsername,
	signUpPassword,
	signUpEmail,
	signUpAjax,
	isSignUp,
}) => {
	const inputReset = () => {
		signUpPasswordInput('');
		signUpEmailInput('');
		signUpUsernameInput('');
		signUpAgeSelect('10');
		signUpSexSelect('male');
		signUpModal();
	};
	const [certificate, setCertificate] = useState({
		email: '#ff8787',
		password: '#ff8787',
		username: '#ff8787',
	});
	useEffect(() => {
		console.log(certificate);
	}, [certificate.email, certificate.password, certificate.username]);
	const signUpHandler = (e) => {
		e.preventDefault();
		if (signUpEmail.length < 12) {
			alert('email');
		} else if (signUpPassword.length < 8) {
			alert('password');
		} else if (signUpUsername.length < 6) {
			alert('username');
		} else if (signUpSex === '성별') {
			alert('성별');
		} else if (signUpAge === '나이') {
			alert('나이');
		} else {
			signUpAjax({ email: signUpEmail, password: signUpPassword, nickname: signUpUsername, sex: signUpSex, age: signUpAge });
			console.log('signUp: ', isSignUp);
			console.log('email:', signUpEmail);
			console.log('password: ', signUpPassword);
			console.log('username: ', signUpUsername);
			console.log('sex: ', signUpSex);
			console.log('age: ', signUpAge);
			inputReset();
		}
	};

	return (
		<div className="modal" style={modalSwitch(signUpSwitch)}>
			<div className="modalExit" onClick={inputReset}>
				X
			</div>
			<form onSubmit={(e) => signUpHandler(e)}>
				<input
					required="required"
					className="email"
					value={signUpEmail}
					type="email"
					placeholder="email"
					onChange={(e) => {
						if (e.target.value.length < 12) {
							setCertificate(Object.assign({}, certificate, { email: 'ff8787' }));
						} else {
							setCertificate(Object.assign({}, certificate, { email: 'black' }));
						}
						signUpEmailInput(e.target.value);
					}}
				/>
				<FontAwesomeIcon icon={faUser} style={{ color: certificate.email, bottom: '17px' }} />
				<input
					required="required"
					className="password"
					value={signUpPassword}
					type="password"
					placeholder="password"
					onChange={(e) => {
						if (e.target.value.length < 8) {
							setCertificate(Object.assign({}, certificate, { password: 'ff8787' }));
						} else {
							setCertificate(Object.assign({}, certificate, { password: 'black' }));
						}
						signUpPasswordInput(e.target.value);
					}}
				/>
				<FontAwesomeIcon icon={faUser} style={{ color: certificate.password, bottom: '18px' }} />
				<input
					required="required"
					className="username"
					value={signUpUsername}
					type="username"
					placeholder="username"
					onChange={(e) => {
						if (e.target.value.length < 6) {
							setCertificate(Object.assign({}, certificate, { username: 'ff8787' }));
						} else {
							setCertificate(Object.assign({}, certificate, { username: 'black' }));
						}
						signUpUsernameInput(e.target.value);
					}}
				/>
				<FontAwesomeIcon icon={faUser} style={{ color: certificate.username, left: '-2%', bottom: '27px' }} />

				<select defaultValue={'DEFAULT'} onChange={(e) => signUpSexSelect(e.target.value)}>
					<option value="DEFAULT">성별</option>
					<option value="male">남성</option>
					<option value="famale">여성</option>
				</select>
				<select defaultValue={'DEFAULT'} onChange={(e) => signUpAgeSelect(e.target.value)}>
					<option value="DEFAULT">나이</option>
					{[10, 20, 30, 40, 50, 60].map((age, id) => (
						<option value={age} key={id}>
							{age}대
						</option>
					))}
				</select>

				<button className="signup__button">SignUp</button>
			</form>
		</div>
	);
};

export default SignUp;

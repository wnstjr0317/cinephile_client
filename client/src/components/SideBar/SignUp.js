import React, { useState, useEffect } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
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
	modifyUserInfoPost,
}) => {
	const inputReset = () => {
		signUpPasswordInput('');
		signUpEmailInput('');
		signUpUsernameInput('');
		signUpAgeSelect('10');
		signUpSexSelect('male');
		signUpModal();
	};
	let aouth = document.cookie.split('; ').filter((string) => string.slice(0, 8) === 'oauth_id')[0];
	const [certificate, setCertificate] = useState({
		email: '#f06595',
		password: '#f06595',
		username: '#f06595',
	});
	// eslint-disable-next-line no-undef

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
			if (aouth) {
				console.log(aouth);
				modifyUserInfoPost([{ id: aouth.split('=')[1], email: signUpEmail, nickname: signUpUsername, gender: signUpSex, age: signUpAge }]);
				signUpModal();
			} else {
				signUpAjax({ email: signUpEmail, password: signUpPassword, nickname: signUpUsername, gender: signUpSex, age: signUpAge });
				inputReset();
			}

			// console.log('signUp: ', isSignUp);
			console.log('email:', signUpEmail);
			console.log('password: ', signUpPassword);
			console.log('username: ', signUpUsername);
			console.log('sex: ', signUpSex);
			console.log('age: ', signUpAge);
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
					className="sideBarInput"
					value={signUpEmail}
					type="email"
					placeholder="email"
					onChange={(e) => {
						if (e.target.value.length > 12) {
							setCertificate(Object.assign({}, certificate, { email: '74b816' }));
						}
						signUpEmailInput(e.target.value);
					}}
				/>
				<FaChevronCircleDown className="checker" style={{ color: certificate.email }} />
				{aouth === undefined && (
					<input
						required="required"
						className="sideBarInput"
						value={signUpPassword}
						type="password"
						placeholder="password"
						onChange={(e) => {
							if (e.target.value.length > 6) {
								setCertificate(Object.assign({}, certificate, { password: '74b816' }));
							}
							signUpPasswordInput(e.target.value);
						}}
					/>
				)}
				<FaChevronCircleDown className="checker" style={{ color: certificate.password }} />
				<input
					required="required"
					className="sideBarInput"
					value={signUpUsername}
					type="username"
					placeholder="username"
					onChange={(e) => {
						if (e.target.value.length > 6) {
							setCertificate(Object.assign({}, certificate, { username: '74b816' }));
						}
						signUpUsernameInput(e.target.value);
					}}
				/>
				<FaChevronCircleDown className="checker" style={{ color: certificate.username }} />
				<select className="sidiBarSelect" defaultValue={'DEFAULT'} onChange={(e) => signUpSexSelect(e.target.value)}>
					<option value="DEFAULT">성별</option>
					<option value="male">남성</option>
					<option value="famale">여성</option>
				</select>
				<select className="sidiBarSelect age" defaultValue={'DEFAULT'} onChange={(e) => signUpAgeSelect(e.target.value)}>
					<option value="DEFAULT">나이</option>
					{[10, 20, 30, 40, 50, 60].map((age, id) => (
						<option value={age} key={id}>
							{age}대
						</option>
					))}
				</select>

				<button className="sideBarButton signUpButton">SignUp</button>
			</form>
		</div>
	);
};
export default SignUp;

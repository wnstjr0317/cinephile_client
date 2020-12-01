import React from 'react';
import axios from 'axios';

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
}) => {
	const signUpHandler = () => {
		// axios
		// 	.post('/signup', {
		// 		email: email,
		// 		password: password,
		// 		username: username,
		// 		age: age,
		// 		gender: gender,
		// 	})
		// 	.then((res) => {
		// 		if (res.status === 200) {
		// 			alert('회원 가입이 완료되었습니다.');
		// 		} else if (res.status === 409) {
		// 			alert('가입 정보를 다시 확인해 주세요.');
		// 		}
		// 	});
		console.log('email:', signUpEmail);
		console.log('password: ', signUpPassword);
		console.log('username: ', signUpUsername);
		console.log('sex: ', signUpSex);
		console.log('age: ', signUpAge);
		signUpPasswordInput('');
		signUpEmailInput('');
		signUpUsernameInput('');
		signUpModal();
	};

	return (
		<div className="modal" style={modalSwitch(signUpSwitch)}>
			<span onClick={signUpModal}> x</span>
			<hr />
			<input className="email" value={signUpEmail} type="text" placeholder="email" onChange={(e) => signUpEmailInput(e.target.value)} />
			<input className="password" value={signUpPassword} type="text" placeholder="password" onChange={(e) => signUpPasswordInput(e.target.value)} />
			<input className="username" value={signUpUsername} type="text" placeholder="username" onChange={(e) => signUpUsernameInput(e.target.value)} />
			<br />
			<label>Male: </label>
			<input type="radio" checked={signUpSex === 'male'} value="male" onChange={(e) => signUpSexSelect(e.target.value)} />
			<label>Female: </label>
			<input type="radio" checked={signUpSex === 'female'} value="female" onChange={(e) => signUpSexSelect(e.target.value)} />
			<br />
			<label>10~19: </label>
			<input type="radio" checked={signUpAge === '10'} value="10" onChange={(e) => signUpAgeSelect(e.target.value)} />
			<label>20~29: </label>
			<input type="radio" checked={signUpAge === '20'} value="20" onChange={(e) => signUpAgeSelect(e.target.value)} />
			<label>30~39: </label>
			<input type="radio" checked={signUpAge === '30'} value="30" onChange={(e) => signUpAgeSelect(e.target.value)} />
			<label>40~49: </label>
			<input type="radio" checked={signUpAge === '40'} value="40" onChange={(e) => signUpAgeSelect(e.target.value)} />
			<label>50~: </label>
			<input type="radio" checked={signUpAge === '50'} value="50" onChange={(e) => signUpAgeSelect(e.target.value)} />
			<button className="signup__button" onClick={signUpHandler}>
				SignUp
			</button>
		</div>
	);
};

export default SignUp;

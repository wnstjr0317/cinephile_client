import React from 'react';

const SignIn = ({ loginSwitch, modalSwitch, loginModal }) => {
	console.log('login: ', loginSwitch);

	return (
		<div className="modal" style={modalSwitch(loginSwitch)}>
			<span onClick={loginModal}> x</span>
			<hr />
			<button onClick={loginModal}>로그인</button>
		</div>
	);
};
export default SignIn;

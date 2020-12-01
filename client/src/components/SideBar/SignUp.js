import React from 'react';

const SignUp = ({ signUpSwitch, modalSwitch, signUpModal }) => {
	console.log('signUp: ', signUpSwitch);
	return (
		<div className="modal" style={modalSwitch(signUpSwitch)}>
			<span onClick={signUpModal}> x</span>
			<hr />
			<button onClick={signUpModal}>회원가입</button>
		</div>
	);
};
export default SignUp;

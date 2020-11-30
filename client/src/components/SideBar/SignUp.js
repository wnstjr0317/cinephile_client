import React from 'react';

const SignUp = ({ signUpSwitch, modalSwitch }) => {
	console.log('signUp: ', signUpSwitch);
	return (
		<div className="signUpModal" style={modalSwitch(signUpSwitch)}>
			signup
		</div>
	);
};
export default SignUp;

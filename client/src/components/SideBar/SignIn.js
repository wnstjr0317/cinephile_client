import React from 'react';

const SignIn = ({ loginSwitch, modalSwitch }) => {
	console.log('login: ', loginSwitch);

	return (
		<div className="loginModal" style={modalSwitch(loginSwitch)}>
			login
		</div>
	);
};
export default SignIn;

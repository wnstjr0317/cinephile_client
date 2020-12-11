import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const header = ({ match }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { userInfo } = useSelector((state) => ({
		userInfo: state.SignIn.userInfo,
	}));

	return (
		<div className="header">
			<Link className="logo" to="/" />
			{userInfo &&
				(match ? (
					<Link className="writingButton" to="/">
						메인으로
					</Link>
				) : (
					<Link className="writingButton" to="/write">
						글쓰기
					</Link>
				))}
		</div>
	);
};

export default React.memo(header);

import React from 'react';
import '../App.css';
import SideBar from './SideBar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const header = ({ match, wheel }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { userInfo } = useSelector((state) => ({
		userInfo: state.SignIn.userInfo,
	}));

	// console.log(wheel);
	return (
		<div className="header" style={wheel}>
			<SideBar match={match} />
			<Link className="logo" to="/" />
			{userInfo &&
				(match.url === '/write' ? (
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

import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
const header = ({ match }) => {
	return (
		<div className="header">
			<Link className="logo" to="/" />
			{match ? (
				<Link className="writingButton" to="/">
					메인으로
				</Link>
			) : (
				<Link className="writingButton" to="/write">
					글쓰기
				</Link>
			)}
		</div>
	);
};

export default React.memo(header);

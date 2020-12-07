import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
const header = () => {
	return (
		<div className="header">
			<Link className="logo" to="/" />
			<Link className="writingButton" to="/write">
				글쓰기
			</Link>
		</div>
	);
};

export default React.memo(header);

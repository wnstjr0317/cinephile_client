import React from 'react';
import './Main.css';
const footer = () => {
	let developInfo = [
		{ name: '이형우', position: 'front-end' },
		{ name: '조성국', position: 'back-end' },
		{ name: '장수민', position: 'back-end' },
		{ name: '최치원', position: 'front-end' },
	];
	return (
		<div className="footer">
			{developInfo.map((info) => {
				return (
					<div className="developerInfo">
						<div className="devName">{info.name}</div>
						<div className="devPosition">position : {info.position}</div>
						<div className="blog">blog: </div>
						<div className="github">gitHub: </div>
					</div>
				);
			})}
		</div>
	);
};

export default footer;

import React from 'react';
import './Main.css';
const footer = () => {
	let developInfo = [
		{ name: '이형우 (front-end)', position: '팀장' },
		{ name: '조성국 (back-end)', position: '팀원' },
		{ name: '장수민 (back-end)', position: '팀원' },
		{ name: '최치원 (front-end)', position: '팀원' },
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

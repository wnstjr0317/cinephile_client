import React from 'react';
import './Main.css';
const footer = () => {
	let developInfo = [
		{ name: '이형우', position: 'front-end', blog: "https://cassislagos.medium.com", gitHub: "https://github.com/newkidsean" },
		{ name: '조성국', position: 'back-end',  blog: "https://goldencolonel.tistory.com", gitHub: "https://github.com/kook-extended" },
		{ name: '장수민', position: 'back-end', blog: "https://smss.netlify.app", gitHub: "https://github.com/sooe2min" },
		{ name: '최치원', position: 'front-end', blog: "https://chiione.tistory.com", gitHub: "https://github.com/chiione" },
	];
	return (
		<div className="footer">
			{developInfo.map((info) => {
				return (
					<div className="developerInfo">
						<div className="devName">{info.name}</div>
						<div className="devPosition">{info.position}</div>
						<div className="blog"><a href={info.blog}>{info.blog.slice(8)}</a></div>
						<div className="github"><a href={info.gitHub}>{info.gitHub.slice(8)}</a></div>
					</div>
				);
			})}
		</div>
	);
};

export default footer;

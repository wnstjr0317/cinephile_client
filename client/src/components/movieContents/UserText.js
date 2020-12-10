import React from 'react';

const userText = ({ contentsList }) => {
	return (
		<div className="writingHeader">
			<div className="userText" key={contentsList.id}>
				{/* <iframe srcDoc={contentsList.title} style={{ border: 'none' }}></iframe> */}
				<div className="userTitle">{contentsList.title}</div>
				<div className="userText">{contentsList.text}</div>
			</div>
		</div>
	);
};

export default userText;

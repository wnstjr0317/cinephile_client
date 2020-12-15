import React from 'react';

const userText = ({ contentsList }) => {
	console.log(contentsList.upload_url);
	return (
		<div className="writingHeader">
			<div className="userText" key={contentsList.id}>
				<div>{contentsList.title}</div>
				{/* {contentsList.upload_url && <img src={contentsList.upload_url} className="userTextImg"></img>} */}
				<iframe srcDoc={contentsList.text} width="500" height="500" className="userText" style={{ border: 'none', display: 'block' }}></iframe>
			</div>
		</div>
	);
};

export default userText;

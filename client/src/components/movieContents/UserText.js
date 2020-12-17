import React from 'react';

const userText = ({ contentsList }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	// console.log(ref.current.children);

	return (
		<div className="writingHeader">
			<div className="userText" key={contentsList.id}>
				<div className="userTextTitle">{contentsList.title}</div>
				{/* {contentsList.upload_url && <img src={contentsList.upload_url} className="userTextImg"></img>} */}
				{/* <div className="userText" style={{ color: 'black' }}>
					{contentsList.text}
				</div> */}
				<div className="texts" dangerouslySetInnerHTML={{ __html: contentsList.text.replace('iframe', 'iframe width = 700, height = 500') }} style={{ color: 'black' }} />
			</div>
		</div>
	);
};

export default userText;

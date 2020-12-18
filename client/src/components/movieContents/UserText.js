import React from 'react';

const userText = ({ contentsList }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	// console.log();

	return (
		<div className="writingHeader">
			<div className="userTextTitle">
				{contentsList.title}
				<div className="userTextData" id="userTextNickname">
					작성자: {contentsList.user.nickname}
				</div>
				<div className="userTextData">Date: {`${contentsList.createdAt.split('T')[0]}`}</div>
			</div>
			<div className="texts" dangerouslySetInnerHTML={{ __html: contentsList.text.replace('iframe', 'iframe width = 700, height = 500') }} style={{ color: 'black' }} />
		</div>
	);
};

export default userText;

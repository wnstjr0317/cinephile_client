import React, { useEffect, useState } from 'react';
import './Main.css';
const slide = () => {
	// let url = URL.createObjectURL();
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [url, setUrl] = useState('');
	const createUrl = function (event) {
		setUrl(URL.createObjectURL(event.target.files[0]));
	};

	return (
		<div style={{ border: '1px solid blue', height: '300px', margin: '20px 0' }}>
			{/* <input type="file" accept="img/*" onChange={createUrl} />
			<img src={url} width="100%" height="100%" alt="" /> */}
		</div>
	);
};

export default slide;

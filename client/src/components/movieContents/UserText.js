import React, { useState } from 'react';
import './MovieContents.css';
import axios from 'axios';

const userText = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [keyword, setKeyword] = useState('');

	const onInputTitle = (e) => {
		setKeyword(e.target.value);
	};

	const onSearchMovie = async (e) => {
		e.preventDefault();
		setKeyword('');

		const variables = {
			keyword: keyword,
		};

		const searchMovies = await axios.get('https://final.cinephile.kro.kr/board/movies', variables);
	};

	return (
		<div className="writingHeader">
			<h1>유저 글</h1>
			<input type="text" value={keyword} placeholder="영화 제목" onChange={onInputTitle} />
			<button onClick={onSearchMovie}>검색</button>
		</div>
	);
};

export default userText;

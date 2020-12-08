import React, { useEffect, useState } from 'react';
import './MovieContents.css';
import axios from 'axios';

const comment = ({ contentsList }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [cmmt, setCmmt] = useState('');
	// eslint-disable-next-line react-hooks/rules-of-hooks

	// 댓글 등록 함수
	const cmmtSubmitHandler = (e) => {
		e.preventDefault();
		axios
			.post('https://final.cinephile.kro.kr/board/comment', {
				usercomment: cmmt,
			})
			.then((res) => {
				setCmmt('');
			})
			.catch((error) => {
				setCmmt('');
			});
	};

	// 컴포넌트 마운트 시 댓글 불러오기
	// eslint-disable-next-line react-hooks/rules-of-hooks

	return (
		<div className="movie__detail">
			{contentsList.map((comment) => {
				return (
					<div className="comment__box" key={comment.id}>
						<div>ID: {comment.id}</div>
						<div className="commentName">{comment.name}</div>
						<div className="commentBody">{comment.body}</div>
					</div>
				);
			})}
			<form type="submit">
				<textarea className="user__comment" type="text" value={cmmt} onChange={(e) => setCmmt(e.target.value)}></textarea>
				<button type="submit" onClick={cmmtSubmitHandler}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default comment;

import React, { useEffect, useState } from 'react';
import './MovieContents.css';
import axios from 'axios';

const comment = ({ contentsList, contentsGetAjax, userInfo, loginModal }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [data, setData] = useState({
		count: 0,
		comment: '',
		commentData: [].concat(contentsList.comments),
	});
	const { count, comment, commentData } = data;
	// 댓글 등록 함수
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		// eslint-disable-next-line no-undef
		contentsGetAjax(contentsList.id);
	}, [count]);

	const cmmtSubmitHandler = (e) => {
		e.preventDefault();
		axios
			.post(`http://localhost:3000/board/comment/${contentsList.id}`, {
				text: comment,
				user: userInfo.id,
				article: contentsList.movieId,
			})
			.then((res) => {
				setData(Object.assign({}, data, { comment: '', count: count + 1 }));
			});
	};

	// 컴포넌트 마운트 시 댓글 불러오기

	return (
		<div className="movie__detail">
			<div className="movie__detail">
				{commentData.concat(contentsList.comments).map((comment, idx) => {
					return (
						comment && (
							<div className="comment__box" key={idx}>
								{userInfo && <div className="commentUser">{userInfo.nickname}</div>}
								<div className="commentText">{Object.assign({}, comment).text}</div>
								<div className="likeCount">{Object.assign({}, comment).likecount}</div>
							</div>
						)
					);
				})}
			</div>

			{userInfo ? (
				<form type="submit" onSubmit={cmmtSubmitHandler}>
					<textarea className="user__comment" type="text" value={comment} onChange={(e) => setData(Object.assign({}, data, { comment: e.target.value }))}></textarea>
					<button type="submit">Submit</button>
				</form>
			) : (
				<div onClick={loginModal}>로그인을 해주세요</div>
			)}
		</div>
	);
};

export default comment;

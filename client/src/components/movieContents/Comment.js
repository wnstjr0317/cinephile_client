import React, { useEffect, useState, useRef } from 'react';
import './MovieContents.css';
import axios from 'axios';

const comment = ({ comments, contentsList, contentsGetAjax, userInfo, loginModal }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const ref = useRef(null);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [data, setData] = useState({
		like: false,
		comment: '',
		sign: false,
	});
	const { like, comment, sign } = data;
	// 댓글 등록 함수
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		// eslint-disable-next-line no-undef
		contentsGetAjax(contentsList.id);
	}, [like, sign]);
	console.log(comments);
	const cmmtSubmitHandler = (e) => {
		e.preventDefault();
		axios
			.post(`http://localhost:3000/board/comment`, {
				text: comment,
				user: userInfo.id,
				article: contentsList.movieId,
			})
			.then((res) => {
				setData(Object.assign({}, data, { comment: '', sign: !sign }));
				ref.current.focus();
			});
	};
	// console.log('userid:', userInfo.id);
	const likeClickHandler = (commentId) => {
		axios
			.post(`http://localhost:3000/board/like`, {
				user: userInfo.id,
				comment: commentId,
			})
			.then((res) => {
				console.log(res);
				setData(Object.assign({}, data, { like: !like }));
			});
	};
	// 컴포넌트 마운트 시 댓글 불러오기

	return (
		<div className="movie__detail">
			{userInfo ? (
				<form type="submit" className="commentForm" onSubmit={cmmtSubmitHandler}>
					<textarea ref={ref} className="user__comment" type="text" value={comment} onChange={(e) => setData(Object.assign({}, data, { comment: e.target.value }))}></textarea>
					<button className="commentButton" type="submit">
						Submit
					</button>
				</form>
			) : (
				<div onClick={loginModal}>로그인을 해주세요</div>
			)}
			{comments
				.map((comment, idx) => {
					return (
						comment && (
							<div className="comment__box" key={idx} id={comment.id}>
								<div className="commentUser">{comment.user.nickname}</div>
								<div className="commentText">{Object.assign({}, comment).text}</div>

								<div
									className="likeButton"
									onClick={(e) => {
										console.log('comment:', comment.id);
										userInfo && likeClickHandler(comment.id);
									}}
								>
									🤍 좋아요
								</div>
								<div className="likeCount"> 💛 {Object.assign({}, comment).likecount}</div>
							</div>
						)
					);
				})
				.reverse()}
		</div>
	);
};

export default comment;

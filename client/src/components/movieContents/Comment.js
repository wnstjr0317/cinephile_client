import React, { useEffect, useState, useRef } from 'react';
import './MovieContents.css';
import axios from 'axios';
import { FaRegThumbsUp, FaUserAlt } from 'react-icons/fa';

const comment = ({ comments, contentsList, contentsGetAjax, loginModal }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const ref = useRef(null);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [data, setData] = useState({
		like: false,
		comment: '',
		sign: false,
	});
	const time = (comment) => {
		let date = new Date().getDate();
		let nowDate = comment.createdAt.split('T')[0].slice(-2);

		if (Number(nowDate) === date) {
			let result = Number(comment.createdAt.split('T')[1].slice(0, 2));
			if (result >= 15) {
				result -= 15;
			} else {
				result += 9;
			}
			return result >= 0 < 12 ? String(result) + comment.createdAt.split('T')[1].slice(2, 5) + ' PM' : String(result) + comment.createdAt.split('T')[1].slice(2, 5) + ' AM';
		} else {
			if (date - nowDate <= 7) {
				return `${date - nowDate} day ago `;
			} else {
				return comment.createdAt.split('T')[0];
			}
		}
	};
	const { like, comment, sign } = data;
	// 댓글 등록 함수
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		// eslint-disable-next-line no-undef
		contentsGetAjax(contentsList.id);
	}, [contentsGetAjax, contentsList.id, like, sign]);
	console.log(contentsList);

	const cmmtSubmitHandler = (e) => {
		e.preventDefault();
		axios
			.post(`http://localhost:3000/board/comment`, {
				text: comment,
				user: contentsList.user.id,
				article: contentsList.id,
			})
			.then((res) => {
				console.log(res);
				setData(Object.assign({}, data, { comment: '', sign: !sign }));
				ref.current.focus();
			});
	};
	// console.log('userid:', userInfo.id);
	const likeClickHandler = (commentId) => {
		console.log(contentsList.user);
		axios
			.post(`http://localhost:3000/board/like`, {
				user: contentsList.user.id,
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
			{contentsList.user ? (
				<form type="submit" className="commentForm" onSubmit={cmmtSubmitHandler}>
					<textarea ref={ref} className="user__comment" type="text" value={comment} onChange={(e) => setData(Object.assign({}, data, { comment: e.target.value }))}></textarea>
					<button className="commentButton" type="submit">
						댓글 쓰기
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
								<div className="commentUser">
									<FaUserAlt className="commentTitleIcon"></FaUserAlt>
									{comment.user.nickname}
									<span className="commentTime">{time(comment)}</span>
								</div>
								<div className="likeCount">
									<FaRegThumbsUp
										className="likeButton"
										onClick={(e) => {
											console.log('comment:', comment.id);
											contentsList.user && likeClickHandler(comment.id);
										}}
									/>
									{Object.assign({}, comment).likecount}
								</div>

								<div className="commentText">{Object.assign({}, comment).text}</div>
							</div>
						)
					);
				})
				.reverse()}
		</div>
	);
};

export default comment;

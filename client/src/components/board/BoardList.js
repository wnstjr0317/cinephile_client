import React from 'react';
import './Board.css';
import { Link } from 'react-router-dom';
import { FaRegCommentDots, FaUserCircle } from 'react-icons/fa';

const MovieList = ({ boardList }) => {
	// console.log(boardList);
	const time = (comment) => {
		let date = new Date().getDate();
		let nowDate = comment.createdAt.split('T')[0].slice(-2);
		// console.log(comment);
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
	return (
		<div className="boardList">
			<div className="boardMainTitle">Board</div>
			{boardList
				.map((movie) => {
					return (
						<Link to={`/board/${movie.id}`} className="boardContents" key={movie.id}>
							<div className="boardImg">{movie.upload_url ? <img src={movie.upload_url}></img> : <FaRegCommentDots style={{ fontSize: '25px', opacity: 0.6 }} />}</div>
							<div className="boardTitle">{movie.title}</div>
							<div className="boardNickname">
								<FaUserCircle style={{ marginRight: '0.5em', color: '#22b8cf', opacity: 0.6 }} />
								{movie.user.nickname}
							</div>
							<div className="boardDate">{time(movie)}</div>
						</Link>
					);
				})
				.reverse()}
		</div>
	);
};

export default MovieList;

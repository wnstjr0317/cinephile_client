import React from 'react';
import './Board.css';
import { Link } from 'react-router-dom';

const MovieList = ({ boardList }) => {
	console.log(boardList);
	return (
		<div className="boardList">
			{boardList.map((el) => {
				return (
					<Link to={`/board/${el.id}`} className="contents" key={el.id}>
						<img src={el.thumbnailUrl} />
						<div className="title">{el.title}</div>
					</Link>
				);
			})}
		</div>
	);
};

export default MovieList;

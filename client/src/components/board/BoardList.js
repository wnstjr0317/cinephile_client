import React from 'react';
import './Board.css';
import { Link } from 'react-router-dom';

const MovieList = ({ boardList }) => {
	return (
		<div className="boardList">
			{boardList.map((movie) => {
				return (
					<Link to={`/board/${movie.id}`} className="boardContents" key={movie.id}>
						<div className="boardTitle">{movie.title}</div>
						<div className="boardText">{movie.text}</div>
					</Link>
				);
			})}
		</div>
	);
};

export default MovieList;

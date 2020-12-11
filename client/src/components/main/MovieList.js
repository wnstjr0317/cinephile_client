import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

const MovieList = ({ movieList }) => {
	console.log(movieList);
	return (
		<div className="movie__list">
			{movieList.map((el) => {
				return (
					<Link to={`/board/${el.id}`} className="Contents" key={el.id}>
						<img src={el.thumbnailUrl} />
						<div className="title">{el.title}</div>
					</Link>
				);
			})}
		</div>
	);
};

export default MovieList;

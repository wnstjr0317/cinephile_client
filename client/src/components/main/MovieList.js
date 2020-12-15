/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

const MovieList = ({ movieList }) => {
	console.log(movieList);
	return movieList[0] ? (
		<div className="movie__list">
			{movieList.map((movies) => {
				const { movie } = movies;
				return (
					<Link to={`/board/${movies.id}`} className="mainContents" key={movies.id}>
						<img className="mainListImg" src={movie.poster} />
						<div className="mainTitle">{movie.title}</div>
					</Link>
				);
			})}
		</div>
	) : (
		<div />
	);
};

export default MovieList;

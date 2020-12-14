/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

const MovieList = ({ movieList }) => {

	return (
		<div className="movie__list">
			{movieList.map((movies) => {
				const { movie } = movies;
				return (
					<Link to={`/board/${movies.id}`} className="mainContents" key={movies.id}>
						<img src={movie.poster} />
						<div className="mainTitle">{movie.title}</div>
					</Link>
				);
			})}
		</div>
	);
};

export default MovieList;

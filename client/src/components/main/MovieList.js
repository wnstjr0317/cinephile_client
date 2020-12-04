import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './MovieList.css';
import { posters } from './posters';

const MovieList = () => {
	const [movies, setMovies] = useState([]);
	const getMovieList = () => {
		setMovies(posters);
	};
	// const getMovieList = async () => {
	//     const response = await axios.get('https://final.cinephile.kro.kr/movies')
	//     setMovies(response)
	// }

	useEffect(() => {
		getMovieList();
	}, []);

	return (
		<div className="movie__list">
			{movies.map((movie) => (
				<Movie key={movie.id} movie={movie} />
			))}
		</div>
	);
};

export default MovieList;

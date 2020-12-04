import React, { useState, useEffect } from 'react'
import Movie from './Movie';
import './MovieList.css';
import { posters } from './posters/posters';

const MovieList = ({ movieGetAjax }) => {
    const [movies, setMovies] = useState([]);
    const getMovieList = () => {
        setMovies(posters)
    }
    // const getMovieList = () => {
    //     movieGetAjax()
    // }

    useEffect(() => {
        getMovieList();
    }, []);

    return (
        <div className="movie__list">
            {movies.map(movie => 
                <Movie key={movie.id} movie={movie} />
            )}
        </div>
    )
}

export default MovieList;

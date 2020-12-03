import React from "react";
import './Movie.css';

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img className="poster" src={movie.thumbnail} />
      <div className="title">{movie.title}</div>
      <div className="genre">{movie.genre}</div>
    </div>
  );
};

export default Movie;

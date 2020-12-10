import React, { useEffect } from 'react';
import './MovieContents.css';
const movieInfo = ({ contentsList, history }) => {
	const movie = Object.assign({}, contentsList.movie);
	return (
		<div className="movieInfo">
			<div className="movieConetents" key={contentsList.id}>
				<div className="poster">
					<img src={movie.poster} alt="" />
				</div>
				<div className="movieInfo">
					<div className="title">{movie.title}</div>
					<div className="subTitle">{movie.sub_title}</div>
					<div className="director">{movie.director}</div>
					<div className="story">{movie.story1}</div>
					<div className="story">{movie.story2}</div>
					<div className="actor">{movie.actor}</div>
					<div className="genre">{movie.genre}</div>
					<div className="nation">{movie.nation}</div>
					<div className="runtime">{movie.runtime}</div>
				</div>
			</div>
		</div>
	);
};

export default movieInfo;

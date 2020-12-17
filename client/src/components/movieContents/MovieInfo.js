import React, { useEffect } from 'react';
import './MovieContents.css';
const movieInfo = ({ contentsList, movie, history }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	console.log(movie.poster.split('?')[0]);
	return movie ? (
		<div className="movieWrapper">
			<div className="movieInfo" key={contentsList.id}>
				<div className="poster">{movie.poster && <img src={movie.poster.split('?')[0]} alt="" />}</div>
				<div className="movieDetail">
					<div className="title">Title: {`${movie.title} (${movie.sub_title})`}</div>
					<div className="director">Director: {movie.director}</div>
					<div className="story">Story: {movie.story1 ? movie.story1 : '줄거리가 없습니다.'}</div>
					<div className="story">{movie.story2}</div>
					<div className="actor">Actor: {movie.actor}</div>
					<div className="genre">Genre: {movie.genre}</div>
					<div className="nation">Nation: {movie.nation}</div>
					<div className="runtime">Runtime: {movie.runtime}</div>
				</div>
			</div>
		</div>
	) : (
		<img src="https://www.newtide.com.tw/v_comm/global/images/loading.gif" alt="" />
	);
};

export default movieInfo;

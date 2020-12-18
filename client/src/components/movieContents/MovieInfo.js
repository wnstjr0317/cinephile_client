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
					<div className="title">{`${movie.title} (${movie.sub_title})`}</div>
					<div className="runtime">{movie.runtime}</div>
					<div className="story">{movie.story1 ? movie.story1 : '줄거리가 없습니다.'}</div>
					<div>{movie.story2}</div>
					<div className="otherInfo">감독: {movie.director}</div>
					<div className="otherInfo">배우: {movie.actor}</div>
					<div className="otherInfo">장르: {movie.genre}</div>
					<div className="otherInfo">국가: {movie.nation}</div>
				</div>
			</div>
		</div>
	) : (
		<img src="https://www.newtide.com.tw/v_comm/global/images/loading.gif" alt="" />
	);
};

export default movieInfo;

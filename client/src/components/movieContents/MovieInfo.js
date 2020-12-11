import React, { useEffect } from 'react';
import './MovieContents.css';
const movieInfo = ({ contentsList, movie, history }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		return () => {};
	});
	return movie ? (
		<div className="movieWrapper">
			<div className="movieInfo" key={contentsList.id}>
				<div className="poster">
					<img src={movie.poster} alt="" />
				</div>
				<div className="movieDetail">
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
	) : (
		<img src="https://www.newtide.com.tw/v_comm/global/images/loading.gif" alt="" />
	);
};

export default movieInfo;

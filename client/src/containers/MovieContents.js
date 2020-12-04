import React from 'react';
import MovieInfo from '../components/movieContents/MovieInfo';
import ExpertEvaluation from '../components/movieContents/ExpertEvaluation';
import Comment from '../components/movieContents/Comment';
const movieContent = () => {
	return (
		<div className="movieContents">
			<MovieInfo />
			<ExpertEvaluation />
			<Comment />
		</div>
	);
};

export default React.memo(movieContent);

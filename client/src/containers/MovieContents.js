import React from 'react';
import MovieInfo from '../components/movieContents/MovieInfo';
import ExpertEvaluation from '../components/movieContents/ExpertEvaluation';
import Comment from '../components/movieContents/Comment';
import '../App.css';
const movieContent = () => {
	return (
		<div className="main">
			<MovieInfo />
			<ExpertEvaluation />
			<Comment />
		</div>
	);
};

export default React.memo(movieContent);

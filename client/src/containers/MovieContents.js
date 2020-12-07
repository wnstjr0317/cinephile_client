import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieInfo from '../components/movieContents/MovieInfo';
import ExpertEvaluation from '../components/movieContents/ExpertEvaluation';
import Comment from '../components/movieContents/Comment';
import { cmmtGetAjaxAction } from '../modules/MovieComment';

const movieContent = () => {
	const dispatch = useDispatch();
	const commentList = useSelector(state => state.MovieComment.commentList);
	const cmmtGetAjax = useCallback(() => {
		dispatch(cmmtGetAjaxAction());
	}, [dispatch])

	return (
		<div className="movieContents">
			<MovieInfo />
			<ExpertEvaluation />
			<Comment cmmtGetAjax={cmmtGetAjax} commentList={commentList} />
		</div>
	);
};

export default React.memo(movieContent);

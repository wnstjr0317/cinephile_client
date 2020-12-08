import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieInfo from '../components/movieContents/MovieInfo';
import UserText from '../components/movieContents/UserText';
import Comment from '../components/movieContents/Comment';
import { contentsGetAjaxAction } from '../modules/MovieContents';

const movieContent = ({ match }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const dispatch = useDispatch();
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { contentsList } = useSelector((state) => ({
		contentsList: state.MovieContents.contentsInfo,
	}));
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const contentsGetAjax = useCallback(
		(boardNo) => {
			dispatch(contentsGetAjaxAction(boardNo));
		},
		[dispatch]
	);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		contentsGetAjax(match.params.id);
	}, [match.params.id]);

	return (
		<div className="movieContents">
			<MovieInfo contentsList={contentsList} />
			<UserText contentsList={contentsList} />
			<Comment contentsList={contentsList} />
		</div>
	);
};

export default React.memo(movieContent);

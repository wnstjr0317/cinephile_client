import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieInfo from '../components/movieContents/MovieInfo';
import UserText from '../components/movieContents/UserText';
import Comment from '../components/movieContents/Comment';
import { loginSwitchAction } from '../modules/SideBar';
import { contentsGetAjaxAction } from '../modules/MovieContents';

const movieContent = ({ match, history }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const dispatch = useDispatch();
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { contentsList, userInfo, movie, comments } = useSelector((state) => ({
		contentsList: state.MovieContents.contentsInfo,
		comments: state.MovieContents.comment,
		movie: state.MovieContents.movie,
		userInfo: state.SignIn.userInfo,
	}));
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const contentsGetAjax = useCallback(
		(boardNo) => {
			dispatch(contentsGetAjaxAction(boardNo));
		},
		[dispatch]
	);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const loginModal = useCallback(() => {
		dispatch(loginSwitchAction());
	}, [dispatch]);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		contentsGetAjax(match.params.id);
	}, [match.params.id]);

	return (
		Number(match.params.id) === contentsList.id && (
			<div className="main">
				<MovieInfo contentsList={contentsList} movie={movie} history={history} />
				<UserText contentsList={contentsList} />
				<Comment contentsList={contentsList} comments={comments} contentsGetAjax={contentsGetAjax} loginModal={loginModal} userInfo={userInfo} />
			</div>
		)
	);
};

export default React.memo(movieContent);

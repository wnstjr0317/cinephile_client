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
	const { contentsList, userInfo } = useSelector((state) => ({
		contentsList: state.MovieContents.contentsInfo,
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

	return contentsList[0] === '' ? (
		<div></div>
	) : (
		<div className="movieContents">
			<MovieInfo contentsList={contentsList} history={history} />
			<UserText contentsList={contentsList} />
			<Comment contentsList={contentsList} contentsGetAjax={contentsGetAjax} loginModal={loginModal} userInfo={userInfo} />
		</div>
	);
};

export default React.memo(movieContent);

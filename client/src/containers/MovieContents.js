import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieInfo from '../components/movieContents/MovieInfo';
import UserText from '../components/movieContents/UserText';
import Comment from '../components/movieContents/Comment';
import { toggleSwitchAction, loginSwitchAction } from '../modules/SideBar';
import { contentsGetAjaxAction } from '../modules/MovieContents';

const movieContent = ({ match, history }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const dispatch = useDispatch();
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { toggleSwitch, contentsList, userInfo, movie, comments } = useSelector((state) => ({
		toggleSwitch: state.SideBar.toggleSwitch,
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
	}, [contentsGetAjax, match.params.id]);
	const toggleEventHandler = () => {
		return toggleSwitch ? { display: 'block', color: 'white' } : { display: 'none', color: 'white' };
	};
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const toggle = useCallback(() => {
		dispatch(toggleSwitchAction());
	}, [dispatch]);

	return (
		Number(match.params.id) === contentsList.id && (
			<div className="movieInfoMain">
				<div id="sideBarToggle" onClick={toggle} style={toggleSwitch ? { color: 'white' } : { color: 'black' }}>
					{'>'}
					<div className="sidebarToggleHover">Movie Info</div>
				</div>
				<div className="movieInfoSlide" style={toggleEventHandler()}>
					<MovieInfo contentsList={contentsList} movie={movie} history={history} />
				</div>
				<div className="userContents">
					<UserText contentsList={contentsList} />
					<Comment contentsList={contentsList} comments={comments} contentsGetAjax={contentsGetAjax} loginModal={loginModal} userInfo={userInfo} />
				</div>
			</div>
		)
	);
};
// {match.params.id && (
//
// )}
export default React.memo(movieContent);

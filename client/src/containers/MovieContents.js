import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieInfo from '../components/movieContents/MovieInfo';
import UserText from '../components/movieContents/UserText';
import Comment from '../components/movieContents/Comment';
import { toggleSwitchAction, loginSwitchAction } from '../modules/SideBar';
import { contentsGetAjaxAction } from '../modules/MovieContents';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

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
		return toggleSwitch ? { display: 'none', color: 'white' } : { display: 'block', color: 'white' };
	};
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const toggle = useCallback(() => {
		dispatch(toggleSwitchAction());
	}, [dispatch]);

	return (
		Number(match.params.id) === contentsList.id && (
			<div className="movieInfoMain" style={toggleSwitch ? { backgroundColor: 'black' } : { backgroundColor: '#141618' }}>
				<button id="movieInfoToggle" onClick={toggle}>
					{toggleSwitch ? <FaArrowRight /> : <FaArrowLeft />}
				</button>
				<div className="movieInfoSlide" style={toggleEventHandler()}>
					<div className="exitMovieInfo" onClick={toggle}>
						X
					</div>
					<MovieInfo contentsList={contentsList} movie={movie} history={history} />
				</div>
				<div className="userContents" style={toggleSwitch ? { visibility: 'visible' } : { visibility: 'hidden' }}>
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

/* eslint-disable no-undef */
import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slide from '../components/main/Slide';
import MovieList from '../components/main/MovieList';
import Footer from '../components/main/Footer';

import '../App.css';
import { movieGetAjaxAction } from '../modules/MovieList';

const Main = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { movieList } = useSelector((state) => ({
		movieList: state.MovieList,
	}));
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const dispatch = useDispatch();
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const movieListUpdate = useCallback(() => {
		dispatch(movieGetAjaxAction());
	}, [dispatch]);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		movieListUpdate();
	}, []);
	console.log(movieList);

	return (
		<div className="main">
			<Slide />
			<MovieList movieList={movieList} />
			<Footer />
		</div>
	);
};

export default React.memo(Main);

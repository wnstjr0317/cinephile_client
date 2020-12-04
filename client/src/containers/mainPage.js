import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { movieGetAjaxAction } from '../modules/movieList';
import MovieList from '../components/MovieList';

const mainPage = () => {
	// const dispatch = useDispatch();

	// const movieGetAjax = useCallback(
	//     (e) => {
	//         dispatch(movieGetAjaxAction(e))
	//     }, [dispatch]
	// )

	return <div>{/* <MovieList movieGetAjax={movieGetAjax} /> */}</div>;
};

export default React.memo(mainPage);

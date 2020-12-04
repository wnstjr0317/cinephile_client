import React from 'react';
import Slide from '../components/main/Slide';
import MovieList from '../components/main/MovieList';
import Footer from '../components/main/Footer';
import MovieContents from './MovieContents';

const main = () => {
	return (
		<div className="main">
			<Slide />
			<MovieList />
			<Footer />
			<MovieContents />
		</div>
	);
};

export default React.memo(main);

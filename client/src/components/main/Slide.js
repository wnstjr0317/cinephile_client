/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState, useRef } from 'react';
import './Main.css';
const slide = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [array, setArray] = useState([
		{ display: 'flex', color: 'rgb(215, 199, 196)' },
		{ display: 'none', color: 'rgb(67, 64, 64)' },
		{ display: 'none', color: 'rgb(67, 64, 64)' },
		{ display: 'none', color: 'rgb(67, 64, 64)' },
		{ display: 'none', color: 'rgb(67, 64, 64)' },
	]);

	const slideLeft = () => {
		setArray([...array.slice(1, 5), array[0]]);
	};
	const slideRight = () => {
		setArray([array[4], ...array.slice(0, 4)]);
	};
	let a = [
		'https://www.10wallpaper.com/wallpaper/medium/1901/Teleios_ZW_2019_Movie_Poster_medium.jpg',
		'https://p4.wallpaperbetter.com/wallpaper/221/189/102/batman-batman-begins-movies-the-dark-knight-wallpaper-preview.jpg',
		'https://p4.wallpaperbetter.com/wallpaper/36/737/153/movies-hollywood-movies-wallpaper-preview.jpg',
		'https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/03/b1649a9d502c4074b5261ea3a16a41b4',
		'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile26.uf.tistory.com%2Fimage%2F992EB1345C781E1502B3B2',
	];

	const useInterval = (callback, delay) => {
		const ref = useRef();
		useEffect(() => {
			ref.current = callback;
		}, [callback]);
		useEffect(() => {
			if (delay !== null) {
				let interval = setInterval(() => {
					ref.current();
				}, delay);
				return () => clearInterval(interval);
			}
		}, [delay]);
	};
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useInterval(slideRight, 3000);

	return (
		<div className="slide">
			{a.map((el, idx) => (
				<div style={{ display: `${array[idx].display}` }} key={el}>
					<img className="slideElement" src={el}></img>
				</div>
			))}

			<div className="slideNav">
				{a.map((el, idx) => (
					<div
						className="slideNavElement"
						style={{ color: `${array[idx].color}` }}
						key={idx}
						id={idx}
						onClick={(e) => {
							setArray(() => {
								let arr = array.map(() => Object.assign({}, { display: 'none', color: 'rgb(67, 64, 64)' }));
								// eslint-disable-next-line no-unused-vars
								let remove = arr.splice(e.target.id, 1, Object.assign({}, { display: 'flex', color: 'rgb(215, 199, 196)' }));
								return arr;
							});
						}}
					>
						●
					</div>
				))}
			</div>
		</div>
	);
};

export default slide;

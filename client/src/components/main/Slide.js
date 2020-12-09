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
	let a = [1, 2, 3, 4, 5];

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
	useInterval(slideRight, 5000);
	/*
		<코드 설명>
		1. 콜백이 업데이트 될 때 마다 useRef 활용해서 current에 콜백 할당 
		2. 1번을 다시 콜백으로 만든 후 setInterval에 첫 번째 인자로 넣어 딜레이가 업데이트 될 때 마다 실행시킴 (단, 딜레이가 null이 아닐 것.)
		3. 클린 업 함수를 실행시켜 setInterval을 중지 시킨다.

		출처: https://velog.io/@jakeseo_me/%EB%B2%88%EC%97%AD-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%9B%85%EC%8A%A4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90%EC%84%9C-setInterval-%EC%82%AC%EC%9A%A9-%EC%8B%9C%EC%9D%98-%EB%AC%B8%EC%A0%9C%EC%A0%90
		*/

	return (
		<div className="slide">
			{a.map((el, idx) => (
				<div style={{ display: `${array[idx].display}` }} key={el}>
					<div className="slideElement">{el}</div>
				</div>
			))}

			<div className="slideController slideLeft" onClick={slideLeft}>
				{'<'}
			</div>
			<div className="slideController slideRight" onClick={slideRight}>
				{'>'}
			</div>
			{a.map((el, idx) => (
				<div
					className="slideNav"
					style={{ color: `${array[idx].color}` }}
					key={idx}
					id={idx}
					onClick={(e) => {
						setArray(() => {
							let arr = array.map(() => Object.assign({}, { display: 'none', color: 'rgb(67, 64, 64)' }));
							let remove = arr.splice(e.target.id, 1, Object.assign({}, { display: 'flex', color: 'rgb(215, 199, 196)' }));
							return arr;
						});
					}}
				>
					●
				</div>
			))}
		</div>
	);
};

export default slide;

/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState, useRef } from 'react';
import './Main.css';
import joker from './video/joker.mp4';

const slide = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [array, setArray] = useState([
		{ display: 'block', color: 'rgb(215, 199, 196)' },
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
    {
      image: "https://img.hankyung.com/photo/202012/BF.24618571.1.jpg",
      title: "조제",
      actors: "한지민, 그리고 남주혁",
      story: "자신을 ‘조제’로 불러달라는 그녀. 처음 만난 그날부터 조제는 영석에게 잊을 수 없는 이름으로 남는다.",
    },
	{ image: "https://file.newswire.co.kr/data/datafile2/thumb_640/2020/11/3554238800_20201125150205_5963802919.jpg", 
	  title: "이웃사촌", actors: "정우, 오달수, 그리고 김희원", 
	  story: "적인가, 이웃인가? 수상한 가족들의 모든 소리와 행동을 감시하면서 새로운 비밀들을 하나씩 발견하게 되는데…" },
	{ image: "https://t1.daumcdn.net/movie/99a4d42206a028764e86c5bff8cf0021db985223", 
	  title: "도굴", actors: "이제훈, 조우진", 
	  story: "고물인 줄 알았는데 보물이었다?! 땅 파서 장사하는 도굴꾼들의 팔수록 판이 커지는 급이 다른 삽질이 시작된다!"},
	{ image: "https://www.metaflix.com/wp-content/uploads/2020/10/The-Midnight-Sky-Movie-Poster.jpg", 
	  title: "Midnight Sky", actors: "George Clooney", 
	  story: "원인 불명의 재앙으로 종말을 맞이한 지구, 북극에 남겨진 과학자 오거스틴과 탐사를 마치고 지구로 귀환하던 우주 비행사 설리가 짧은 교신에 성공하는데…"},
	{ image: "https://www.joblo.com/assets/images/joblo/posters/2020/02/Run-poster-1.jpg", 
	  title: "Run", actors: "Sarah Paulson", 
	  story: "장애 때문에 휠체어 생활을 하는 ‘클로이’. 어느 날 식탁에 놓인 장바구니에서 하나의 물건을 발견하게 되고 믿었던 모든 일상이 흔들리기 시작하는데…" },
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
    <div>
      <div className="video__intro">
        <video className="video" autoPlay loop muted>
          <source src={joker} type="video/mp4" />
        </video>
        <div className="introduction">
          영화에 대한 생각과 감상을 <br />
          나누는 공간입니다. &nbsp;자, 이제 우리에게
          <br />
          <span>당신의 영화 이야기</span>를 들려주세요, <br />
          <span className="brand">Cinephile</span>
        </div>
      </div>
      <div className="slide">
	  <h1 className="boxOffice">Box Office</h1>
        {a.map((el, idx) => (
          <div className="slideElement" style={{ display: `${array[idx].display}` }} key={idx}>
            <div className="img__container">
              <img className="slideImage" src={el.image}></img>
            </div>
            <div className="info__container">
              <p className="slideTitle">{el.title}</p>
              <p className="slideActors">{el.actors}</p>
              <p className="slideStory">{el.story}</p>
            </div>
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
		</div>
	);
};

export default slide;


import React, { useState } from "react";
import axios from "axios";
import CreateText from './CreateText';
import renderHTML from "react-render-html";
import "./SearchMovie.css";

const SearchMovie = ({ userInfo, history }) => {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);
  const [catchUrl, setCatchUrl] = useState("");
  console.log('catchUrl :',catchUrl);

  const onCatchUrl = (e) => {
    e.preventDefault();
    setCatchUrl(e.target.alt);
  };
  const onInputTitle = (e) => {
    setKeyword(e.target.value);
  };

  const onSearchMovie = async (e) => {
    // e.preventDefault();
    setKeyword("");

    
    const res = await axios.get(`http://localhost:3000/board/movies/${keyword}`, {
    });
    
    console.log("제목 검색 res : ", res);
    setResult(res.data.items);
  };

  const handleEnterPress = (e) => {
    
    if(e.key === 'Enter') {
      onSearchMovie();
    }
  };

  const renderResult = result.map((el, index) => {
    return (
      <div className="movie__result" key={index}>
        <img src={el.image} alt={el.link} value={el.link} onClick={onCatchUrl} />
        <div className="url" >{renderHTML(el.title)}</div>
        {console.log("catchUrl 2 :", catchUrl)}
      </div>
    );
  });

  return (
    <div className="searchPage">
      {catchUrl !== "" ? (<CreateText userInfo={userInfo} url={catchUrl} history={history} />) : (<div>
      <div className="searchIntro">어떤 <span>영화</span> 찾으세요?</div>
      <input className="inputTitle" type="text" value={keyword} placeholder="영화 제목" onKeyPress={handleEnterPress} onChange={onInputTitle} />
      <button className="goSearch" onClick={onSearchMovie}>검색</button>
      
      <div className="renderResult">{renderResult}</div>
      </div> )}
      </div>
  );

};

export default SearchMovie;

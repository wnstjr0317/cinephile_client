import React, { useState } from "react";
import axios from "axios";
import CreateText from './CreateText';
import "./SearchMovie.css";

const SearchMovie = ({ userInfo }) => {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);
  const [catchUrl, setCatchUrl] = useState("");
  console.log('catchUrl :',catchUrl);

  const onCatchUrl = (e) => {
    e.preventDefault();
    setCatchUrl(e.target.value);
  };
  const onInputTitle = (e) => {
    setKeyword(e.target.value);
  };

  const onSearchMovie = async (e) => {
    e.preventDefault();
    setKeyword("");

    // ==== 글 쓰기 위해 검색할 때 아래 endpoint 맞는지 && 검색어 전달 어떻게 해야 하는지 && 전달 시 키값 === //
    // const res = await axios.get("https://final.cinephile.kro.kr/board/movies", {
    const res = await axios.get(`http://localhost:3000/board/movies/${keyword}`, {
      // params: {
      //  title: keyword
      // }
    });
    // const res = await axios.get("https://jsonplaceholder.typicode.com/photos?albumId=1");
    console.log("제목 검색 res : ", res);
    setResult(res.data.items);
  };
  const renderResult = result.map((el, index) => {
    return (
      <div className="movie__result" key={index}>
        <img src={el.image} alt={el.title} />
        <button className="url" value={el.link} onClick={onCatchUrl}>{el.link}</button>
      </div>
    );
  });

  return (
    <div>
      {catchUrl !== "" ? (<CreateText userInfo={userInfo} url={catchUrl} />) : (<div>
      <input type="text" value={keyword} placeholder="영화 제목" onChange={onInputTitle} />
      <button onClick={onSearchMovie}>검색</button>
      
      <div>{renderResult}</div>
      </div> )}
      </div>
  );
};

export default SearchMovie;

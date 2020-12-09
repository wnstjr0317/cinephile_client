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
    //   params: {
    //    keyword: title
    //   }
    // });
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos?albumId=1");
    console.log("res : ", res.data);
    setResult(res.data);
  };
  const renderResult = result.map((el) => {
    return (
      <div className="movie__result" key={el.id}>
        <img src={el.thumbnailUrl} />
        <button className="url" value={el.url} onClick={onCatchUrl}>{el.url}</button>
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

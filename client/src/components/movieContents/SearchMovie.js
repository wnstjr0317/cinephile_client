import React, { useState } from "react";
import axios from "axios";

const SearchMovie = () => {
  const [keyword, setKeyword] = useState("");

  const onInputTitle = (e) => {
    setKeyword(e.target.value);
  };

  const onSearchMovie = async (e) => {
    e.preventDefault();
    setKeyword("");

    const variables = {
      keyword: keyword,
    };

    const searchMovies = await axios.get("https://final.cinephile.kro.kr/board/movies", variables);
  };
  return (
    <div>
      <input type="text" value={keyword} placeholder="영화 제목" onChange={onInputTitle} />
      <button onClick={onSearchMovie}>검색</button>
    </div>
  );
};

export default SearchMovie;

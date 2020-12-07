import React, { useEffect, useState } from "react";
import './MovieContents.css';
import axios from "axios";

const comment = ({ cmmtGetAjax, commentList }) => {
  const [cmmt, setCmmt] = useState("");
  const [star, setStar] = useState("");

  // 댓글 등록 함수
  const cmmtSubmitHandler = () => {
    axios
      .post("https://final.cinephile.kro.kr/movies", {
        usercomment: cmmt,
        star: star,
      })
      .then((res) => {
        cmmtGetAjax();
        setCmmt("");
        setStar("");
      });
  };

  // 컴포넌트 마운트 시 댓글 불러오기
  useEffect(() => {
    cmmtGetAjax();
  }, [commentList])

  return (
    <div className="movie__detail">
      <div className="comment__box">
        <div className="username">홍길동</div>
        <div className="rating" value={star} onChange={(e) => setStar(e.target.value)}>
          별점
        </div>
        {/* 별 버튼 구현하면 일부 수정 필요 */}
        <textarea className="user__comment" type="text" value={cmmt} onChange={(e) => setCmmt(e.target.value)}></textarea>
        <button className="submit" onClick={() => cmmtSubmitHandler()}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default comment;

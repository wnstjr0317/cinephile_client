/* eslint-disable no-undef */
import React from "react";
import { useSelector } from "react-redux";
import SearchMovie from "../components/write/SearchMovie";
import "../App.css";

const Write = ({ history }) => {
  const { userInfo } = useSelector((state) => ({
    userInfo: state.SignIn.userInfo,
  }));
  console.log('USERINFO!!!', userInfo);

  return (
    <div className="main">
      <SearchMovie userInfo={userInfo} history={history} />
    </div>
  );
};

export default React.memo(Write);

/* eslint-disable no-undef */
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchMovie from "../components/write/SearchMovie";
import "../App.css";

const Write = () => {
  const { userInfo } = useSelector((state) => ({
    userInfo: state.SignIn.userInfo,
  }));

  return (
    <div className="main">
      <SearchMovie userInfo={userInfo} />
    </div>
  );
};

export default React.memo(Write);

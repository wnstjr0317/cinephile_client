import React from 'react'
import { useSelector } from "react-redux";
import ChatBoard from '../components/chatBoard/ChatBoard';

const Chat = ({ history }) => {
    const { userInfo } = useSelector((state) => ({
        userInfo: state.SignIn.userInfo,
      }));

    return (
        <div className="main">
            <ChatBoard userInfo={userInfo} history={history} />
        </div>
    )
}

export default React.memo(Chat);

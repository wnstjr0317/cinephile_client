import React, { useState, useEffect } from 'react'
import io from "socket.io-client";
import './ChatBoard.css';

const socketURL = "http://localhost:3000"

const ChatBoard = ({ userInfo, history }) => {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');
  const socket = io(socketURL);
  console.log('chatboard USERINFO!!', userInfo);

  const submit = (e) => {
    e.preventDefault();
    console.log('submit!!!!!!',userInfo.nickname);
    socket.emit('send message', { name: userInfo.nickname, message: value });
   };

   useEffect(() => {
    socket.on('receive message', ({ name, message }) => {
      console.log('message :', message)
      setMessageList(messageList => messageList.concat({ name, message }));
    })
  }, [messageList]);

  return (
    <div className="chat">
      <section className="chat-list">
        {messageList.map((item, i) =>
          <div key={i} className="message">
            <p className="username">{item.name}</p>
            <p className="message-text">{item.message}</p>
          </div>
        )}
      </section>
      <form className="chat-form"
        onSubmit={(e) => submit(e)}>
        <div className="chat-inputs">
        <div className="nickname">{userInfo.nickname}</div>
          <input
            type="text"
            autoComplete="off"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="메세지입력하기"
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatBoard;

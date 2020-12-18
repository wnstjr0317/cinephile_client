import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './ChatBoard.css';

const socketURL = 'http://localhost:3000';
let socket;

const ChatBoard = ({ userInfo, toggleSwitch, history }) => {
	const [messageList, setMessageList] = useState([]);
	const [value, setValue] = useState('');
	const [user, setUser] = useState(null);
	console.log('chatboard USERINFO!!', userInfo);
	useEffect(() => {
		socket = io(socketURL);
	}, [socketURL]);

	useEffect(() => {
		socket.on('receive message', (name, message) => {
			console.log('message :', message);
			setMessageList((messageList) => messageList.concat({ name, message }));
		});
		setUser(JSON.parse(sessionStorage.getItem('userInfo')));
	}, []);

	const submit = (e) => {
		e.preventDefault();
		console.log('submit!!!!!!', user.nickname);
		if (value) {
			socket.emit('send message', user.nickname, value);
			setValue('');
		}
	};
	console.log('chat: ', user);
	return user ? (
		<div className="chat" style={toggleSwitch ? { display: 'block' } : { display: 'none' }}>
			<section className="chat-list">
				{messageList.map((item, i) => (
					<div key={i} className="message">
						<p className="username">{item.name}</p>
						<p className="message-text">{item.message}</p>
					</div>
				))}
			</section>
			<form className="chat-form" onSubmit={(e) => submit(e)}>
				<div className="chat-inputs">
					<div className="nickname">{user.nickname}</div>
					<input type="text" autoComplete="off" onChange={(e) => setValue(e.target.value)} value={value} placeholder="메세지입력하기" />
				</div>
				<button type="submit">Send</button>
			</form>
		</div>
	) : (
		<div />
	);
};

export default ChatBoard;

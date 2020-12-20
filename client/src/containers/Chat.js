import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChatBoard from '../components/chatBoard/ChatBoard';
import '../App.css';
import { chatToggleSwitchAction } from '../modules/Chat';
import { FaRegCommentDots } from 'react-icons/fa';

const Chat = ({ history }) => {
	const { userInfo, chatToggleSwitch } = useSelector((state) => ({
		userInfo: state.SignIn.userInfo,
		chatToggleSwitch: state.Chat.chatToggleSwitch,
	}));
	const dispatch = useDispatch();
	console.log(userInfo, 'con User');
	// eslint-disable-next-line no-undef
	const chatToggle = useCallback(() => {
		// eslint-disable-next-line no-undef
		dispatch(chatToggleSwitchAction());
	}, [dispatch]);
	console.log(userInfo);
	return (
		<div className="chatWrapper">
			{userInfo && (
				<div className="chatToggle">
					<FaRegCommentDots onClick={chatToggle} />
					<ChatBoard userInfo={userInfo} chatToggleSwitch={chatToggleSwitch} history={history} />
				</div>
			)}
		</div>
	);
};

export default React.memo(Chat);

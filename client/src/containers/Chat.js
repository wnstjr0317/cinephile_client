import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChatBoard from '../components/chatBoard/ChatBoard';
import { chatToggleSwitchAction } from '../modules/Chat';
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
	console.log(chatToggleSwitch);
	return (
		<div className="chatWrapper">
			{userInfo && <div className="chatToggle" onClick={chatToggle}></div>}
			<ChatBoard userInfo={userInfo} chatToggleSwitch={chatToggleSwitch} history={history} />
		</div>
	);
};

export default React.memo(Chat);

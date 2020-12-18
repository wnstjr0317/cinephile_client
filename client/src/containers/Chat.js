import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChatBoard from '../components/chatBoard/ChatBoard';
import { toggleSwitchAction } from '../modules/SideBar';
const Chat = ({ history }) => {
	const { userInfo, toggleSwitch } = useSelector((state) => ({
		userInfo: state.SignIn.userInfo,
		toggleSwitch: state.SideBar.toggleSwitch,
	}));
	const dispatch = useDispatch();
	console.log(userInfo, 'con User');
	// eslint-disable-next-line no-undef
	const toggle = useCallback(() => {
		// eslint-disable-next-line no-undef
		dispatch(toggleSwitchAction());
	}, [dispatch]);
	console.log(toggleSwitch);
	return (
		<div className="chatWrapper">
			<div className="chatToggle" onClick={toggle}></div>
			<ChatBoard userInfo={userInfo} toggleSwitch={toggleSwitch} history={history} />
		</div>
	);
};

export default React.memo(Chat);

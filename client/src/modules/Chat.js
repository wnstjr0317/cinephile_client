const CHAT_TOGGLE = 'CHAT_TOGGLE';

//action

export function chatToggleSwitchAction() {
	return {
		type: CHAT_TOGGLE,
	};
}

//action function

const chatToggleInitialState = {
	chatToggleSwitch: false,
};

const chatToggleReducer = (state = chatToggleInitialState, action) => {
	switch (action.type) {
		case CHAT_TOGGLE:
			return Object.assign({}, state, {
				chatToggleSwitch: !state.chatToggleSwitch,
			});

		default:
			return state;
	}
};

//reducer

export default chatToggleReducer;

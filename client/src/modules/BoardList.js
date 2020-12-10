import axios from 'axios';

axios.defaults.withCredentials = true;
const BOARD_GET_PENDING = 'BOARD_GET_PENDING';
const BOARD_GET_SUCCESS = 'BOARD_GET_SUCCESS';
const BOARD_GET_FAILURE = 'BOARD_GET_FAILURE';

const boardGet = async () => await axios.get('http://localhost:3000/board');

export const boardGetAjaxAction = () => (dispatch) => {
	dispatch({ type: BOARD_GET_PENDING });
	boardGet()
		.then((res) => {
			dispatch({
				type: BOARD_GET_SUCCESS,
				result: res.data,
			});
		})
		.catch((error) => {
			dispatch({
				type: BOARD_GET_FAILURE,
				result: error,
			});
		});
};

const boardInitialState = [];

const boardReducer = (state = boardInitialState, action) => {
	const { result } = action;
	switch (action.type) {
		case BOARD_GET_PENDING:
			return state;
		case BOARD_GET_SUCCESS:
			return result;
		case BOARD_GET_FAILURE:
			return result;
		default:
			return state;
	}
};

export default boardReducer;

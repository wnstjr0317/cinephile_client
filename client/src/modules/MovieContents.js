import axios from 'axios';
axios.defaults.withCredentials = true;
// eslint-disable-next-line react-hooks/rules-of-hooks
// const { boardNo } = useSelector((state) => ({
// 	boardNo: state.MovieComment.boardNo,
// }));
// console.log(boardNo);
// 액션 타입 생성
// 서버에서 댓글 받아오는 액션
const CONTENTS_GET_PENDING = 'CONTENTS_GET_PENDING';
const CONTENTS_GET_SUCCESS = 'CONTENTS_GET_SUCCESS';
const CONTENTS_GET_FAILURE = 'CONTENTS_GET_FAILURE';

// 서버 통신 보조 함수
// 선택된 영화에 해당하는 댓글만 받아와야 함
// 포스터에 걸리는 onClick 이벤트에 맞춰서 end point 수정 필요

const contentsGet = async (boardNo) => boardNo && (await axios.get(`https://jsonplaceholder.typicode.com/comments/${boardNo}`));

// 액션 생성자
export const contentsGetAjaxAction = (boardNo) => (dispatch) => {
	dispatch({ type: CONTENTS_GET_PENDING });
	contentsGet(boardNo)
		.then((res) => {
			dispatch({
				type: CONTENTS_GET_SUCCESS,
				result: res.data,
			});
		})
		.catch((error) => {
			dispatch({
				type: CONTENTS_GET_FAILURE,
				result: error,
			});
		});
};

// initialState
const contentsInitialState = {
	pending: false,
	error: false,
	contentsInfo: [],
};

// 리듀서
const contentsReducer = (state = contentsInitialState, action) => {
	const { result } = action;
	switch (action.type) {
		case CONTENTS_GET_PENDING:
			return Object.assign({}, state, {
				pending: true,
				error: false,
			});
		case CONTENTS_GET_SUCCESS:
			return Object.assign({}, state, {
				pending: false,
				contentsInfo: [result],
			});
		case CONTENTS_GET_FAILURE:
			return Object.assign({}, state, {
				pending: false,
				error: true,
				result,
			});

		default:
			return state;
	}
};

export default contentsReducer;
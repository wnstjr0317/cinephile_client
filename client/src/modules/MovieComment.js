import axios from "axios";
axios.defaults.withCredentials = true;

// 액션 타입 생성
// 서버에서 댓글 받아오는 액션
const CMMT_GET_PENDING = "CMMT_GET_PENDING";
const CMMT_GET_SUCCESS = "CMMT_GET_SUCCESS";
const CMMT_GET_FAILURE = "CMMT_GET_FAILURE";

// 서버 통신 보조 함수
// 선택된 영화에 해당하는 댓글만 받아와야 함 
// 포스터에 걸리는 onClick 이벤트에 맞춰서 end point 수정 필요

const cmmtGet = async () => await axios.get("https://final.cinephile.kro.kr/comment");

// 액션 생성자
export const cmmtGetAjaxAction = () => (dispatch) => {
  dispatch({ type: CMMT_GET_PENDING });
  cmmtGet()
    .then((res) => {
      dispatch({
        type: CMMT_GET_SUCCESS,
        result: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: CMMT_GET_FAILURE,
        result: error,
      });
    });
};

// initialState
const cmmtInitialState = {
  pending: false,
  error: false,
  commentList: {}
};

// 리듀서
const cmmtReducer = (state = cmmtInitialState, action) => {
  const { result } = action;
  switch (action.type) {
    case CMMT_GET_PENDING:
      return Object.assign({}, state, {
        pending: true,
        error: false,
      });
    case CMMT_GET_SUCCESS:
      return Object.assign({}, state, {
        pending: false,
        result,
      });
    case CMMT_GET_FAILURE:
      return Object.assign({}, state, {
        pending: false,
        error: true,
        result
      });
    default:
      return state;
  }
};

export default cmmtReducer;

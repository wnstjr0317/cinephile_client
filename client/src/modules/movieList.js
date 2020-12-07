import axios from 'axios';

axios.defaults.withCredentials = true;
const MOVIE_GET_PENDING = 'MOVIE_GET_PENDING';
const MOVIE_GET_SUCCESS = 'MOVIE_GET_SUCCESS';
const MOVIE_GET_FAILURE = 'MOVIE_GET_FAILURE';

const movieGet = async () => await axios.get('https://jsonplaceholder.typicode.com/photos');

export const movieGetAjaxAction = () => (dispatch) => {
	dispatch({ type: MOVIE_GET_PENDING });
	movieGet()
		.then((res) => {
			dispatch({
				type: MOVIE_GET_SUCCESS,
				result: res.data.slice(0, 20),
			});
		})
		.catch((error) => {
			dispatch({
				type: MOVIE_GET_FAILURE,
				result: error,
			});
		});
};

const movieInitialState = [];

const movieReducer = (state = movieInitialState, action) => {
  const { result } = action;
  switch (action.type) {
    case MOVIE_GET_PENDING:
      return [...state];
    case MOVIE_GET_SUCCESS:
      return [...state, result];
    case MOVIE_GET_FAILURE:
      return [...state, result];
    default:
      return state;
  }
};

export default movieReducer;

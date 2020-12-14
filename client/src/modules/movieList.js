import axios from 'axios';

axios.defaults.withCredentials = true;
const MOVIE_GET_PENDING = 'MOVIE_GET_PENDING';
const MOVIE_GET_SUCCESS = 'MOVIE_GET_SUCCESS';
const MOVIE_GET_FAILURE = 'MOVIE_GET_FAILURE';

const movieGet = async () => await axios.get('http://localhost:3000/card');
console.log("movieGet :", movieGet)
export const movieGetAjaxAction = () => (dispatch) => {
	dispatch({ type: MOVIE_GET_PENDING });
	movieGet()
		.then((res) => {
			dispatch({
				type: MOVIE_GET_SUCCESS,
				movieList: res.data,
			});
		})
		.catch((error) => {
			dispatch({
				type: MOVIE_GET_FAILURE,
				error,
			});
		});
};

const movieInitialState = [];

const movieReducer = (state = movieInitialState, action) => {
	const { movieList, error } = action;
	switch (action.type) {
		case MOVIE_GET_PENDING:
			return state;
		case MOVIE_GET_SUCCESS:
			return movieList;
		case MOVIE_GET_FAILURE:
			return error;
		default:
			return state;
	}
};

export default movieReducer;

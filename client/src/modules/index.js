import { combineReducers } from 'redux';
import SideBar from './SideBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MovieList from './movieList';

const reducer = combineReducers({
	SideBar,
	SignIn,
	SignUp,
	MovieList
});

export default reducer;

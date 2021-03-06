import { combineReducers } from 'redux';
import SideBar from './SideBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MovieList from './MovieList';
import BoardList from './BoardList';
import MovieContents from './MovieContents';
import UserInfo from './UserInfo';
import Chat from './Chat';

const reducer = combineReducers({
	SideBar,
	SignIn,
	SignUp,
	MovieList,
	MovieContents,
	BoardList,
	UserInfo,
	Chat,
});

export default reducer;

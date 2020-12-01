import { combineReducers } from 'redux';
import SideBar from './SideBar';
import SignIn from './SignIn';
import SignUp from './SignUp';

const reducer = combineReducers({
	SideBar,
	SignIn,
	SignUp,
});

export default reducer;

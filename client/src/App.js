import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import SideBar from './containers/SideBar';
import Main from './containers/Main';
import MovieContents from './containers/MovieContents';
<div className="main"></div>;

function App() {
	return (
		<Switch>
			<Route
				exact
				path="/"
				render={() => {
					return (
						<div className="wrapper">
							<div className="header" />
							<SideBar />
							<Main />
							<MovieContents />
						</div>
					);
				}}
			/>
		</Switch>
	);
}

export default App;

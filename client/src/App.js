import './App.css';
import { Switch, Route } from 'react-router-dom';
import SideBar from './containers/SideBar';
import Main from './containers/Main';
import Header from './containers/Header';
import MovieContents from './containers/MovieContents';

function App() {
	return (
		<Switch>
			<Route
				exact
				path="/"
				render={() => {
					return (
						<div className="wrapper">
							<Header />
							<SideBar />
							<Main />
						</div>
					);
				}}
			/>
			<Route
				exact
				path="/write"
				render={() => {
					return (
						<div className="wrapper">
							<Header />
							<SideBar />
						</div>
					);
				}}
			/>
			<Route
				exact
				path="/read/:id"
				render={() => {
					return (
						<div className="wrapper">
							<Header />
							<SideBar />
							<MovieContents />
						</div>
					);
				}}
			/>
		</Switch>
	);
}

export default App;

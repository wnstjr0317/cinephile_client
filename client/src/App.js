import './App.css';
import { Switch, Route } from 'react-router-dom';
import SideBar from './containers/SideBar';
import Main from './containers/Main';
import Header from './containers/Header';
import MovieContents from './containers/MovieContents';
import Board from './containers/Board';
import Write from './containers/Write';

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
				render={({ match }) => {
					return (
						<div className="wrapper">
							<Header match={match} />
							<SideBar />
							<Write />
						</div>
					);
				}}
			/>
			<Route
				exact
				path="/board"
				render={({ history, match }) => {
					return (
						<div className="wrapper">
							<Header />
							<SideBar />
							<Board />
						</div>
					);
				}}
			/>
			<Route
				exact
				path="/board/:id"
				render={({ history, match }) => {
					return (
						<div className="wrapper">
							<Header />
							<SideBar />
							<MovieContents history={history} match={match} />
						</div>
					);
				}}
			/>
		</Switch>
	);
}

export default App;

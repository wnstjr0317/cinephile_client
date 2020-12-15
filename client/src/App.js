import './App.css';
import { Switch, Route } from 'react-router-dom';
import SideBar from './containers/SideBar';
import Main from './containers/main';
import Header from './containers/Header';
import MovieContents from './containers/MovieContents';
import Board from './containers/Board';
import Write from './containers/Write';
import UserInfo from './containers/userInfo';
import Chat from './containers/Chat';

function App() {
	return (
		<Switch>
			<Route
				exact
				path="/"
				render={({ history, match }) => {
					return (
						<div className="wrapper">
							<Header />
							<SideBar />
							<Main history={history} match={match} />
						</div>
					);
				}}
			/>
			<Route
				exact
				path="/write"
				render={({ match, history }) => {
					return (
						<div className="wrapper">
							<Header match={match} />
							<SideBar />
							<Write history={history} match={match} />
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
							<Board history={history} match={match} />
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
			<Route
				exact
				path="/userInfo"
				render={({ history, match }) => {
					return (
						<div className="wrapper">
							<Header />
							<SideBar />
							<UserInfo history={history} match={match} />
						</div>
					);
				}}
			/>
			<Route
				exact
				path="/chat"
				render={({ history, match }) => {
					return (
						<div className="wrapper">
							<Header />
							<SideBar />
							<Chat history={history} match={match} />
						</div>
					);
				}}
			/>
		</Switch>
	);
}

export default App;

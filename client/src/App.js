import './App.css';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './containers/Main';
import Header from './containers/Header';
import MovieContents from './containers/MovieContents';
import Board from './containers/Board';
import Write from './containers/Write';

import UserInfo from './containers/UserInfo';
import Chat from './containers/Chat';

function App() {
	const [wheel, setWheel] = useState({ opacity: 0 });
	const wheelEventHandler = (e) => {
		e.pageY > 500 ? setWheel(Object.assign({}, wheel, { opacity: 1, transition: 'all 1.5s' })) : setWheel(Object.assign({}, wheel, { opacity: 0, transition: 'all 1.5s' }));
		console.log(e.pageY);
	};

	return (
		<Switch>
			<Route
				exact
				path="/"
				render={({ history, match }) => {
					return (
						<div className="wrapper" onWheel={wheelEventHandler}>
							<Header match={match} wheel={wheel} />
							<Main history={history} match={match} />
							<Chat history={history} match={match} />
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
							<Write history={history} match={match} />
							<Chat history={history} match={match} />
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
							<Header match={match} />
							<Board history={history} match={match} />
							<Chat history={history} match={match} />
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
							<Header match={match} />
							<MovieContents history={history} match={match} />
							<Chat history={history} match={match} />
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
							<Header match={match} />
							<UserInfo history={history} match={match} />
							<Chat history={history} match={match} />
						</div>
					);
				}}
			/>
		</Switch>
	);
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import SideBar from './containers/SideBar';
import MovieList from './components/main/MovieList';

function App() {
	return (
		<Switch>
			<Route
				exact
				path="/"
				render={() => {
					return (
						<div className="wrapper">
							<div className="header"></div>
							<SideBar />
							<div className="main">
								<MovieList />
							</div>
						</div>
					);
				}}
			/>
			<Route
				path="/movies/:id"
				render={() => {
					return <div>123</div>;
				}}
			/>
		</Switch>
	);
}

export default App;

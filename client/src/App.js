import logo from "./logo.svg";
import "./App.css";
import SideBar from "./containers/SideBar";
import MovieList from "./components/MovieList";

function App() {
	return (
    <div>
		<div className="wrapper">
			<SideBar />
    </div>
			<div className="main">
    <MovieList />
    </div>
		</div>
	);
}

export default App;

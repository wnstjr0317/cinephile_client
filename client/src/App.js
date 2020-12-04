import logo from "./logo.svg";
import "./App.css";
import SideBar from "./containers/SideBar";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="wrapper">
      <div className="header"></div>
      <SideBar />

      <div className="main">
        <MovieList />
      </div>
    </div>
  );
}

export default App;

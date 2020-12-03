import logo from './logo.svg';
import './App.css';
import SideBar from './containers/SideBar';

function App() {
	return (
		<div className="wrapper">
			<SideBar />
			<div className="main"></div>
		</div>
	);
}

export default App;

import logo from './logo.svg';
import './App.css';
import SideBar from './containers/SideBar';

function App() {
	return (
		<div className="wrapper">
			<div className="header">사진</div>
			<SideBar />
			<div className="main">슬라이드</div>
		</div>
	);
}

export default App;

import { Link, Routes, Route } from "react-router-dom";
import PageLogin from "./components/PageLogin";
import PageUserDetail from "./components/PageUserDetail";

function App() {
	return (
		<div className="App">
			<nav>
				<ul>
					<li>
						<Link to="/">Login</Link>
					</li>
					<li>
						<Link to="/user-detail">User Detail</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route index element={<PageLogin />} />
				<Route path="/user-detail" element={<PageUserDetail />} />
			</Routes>
		</div>
	);
}

export default App;

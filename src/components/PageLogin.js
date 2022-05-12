import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginActionAsync } from "../redux/actions";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(loginActionAsync(username, password));
	};

	return (
		<div>
			<h3>Login</h3>
			<form onSubmit={handleSubmit}>
				<label>
					username
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</label>
				<br />
				<label>
					password
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<button type="submit">*LOGIN*</button>
			</form>
		</div>
	);
}

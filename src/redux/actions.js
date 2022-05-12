import axios from "axios";

const loginActionStart = () => ({});

const loginActionSuccess = (payload) => ({
	type: "login/success",
	payload,
});

const loginActionFailed = () => {};

const loginActionAsync = (username, password) => {
	return (dispatch, getState, baseURL) => {
		// dispatch(loginActionStart);
		axios
			.post(`${baseURL}/users/authenticate`, {
				username,
				password,
			})
			.then((response) => {
				console.log(response);
				dispatch(loginActionSuccess({ username, password }));
			})
			.catch((error) => {
				// handle error di sini
				dispatch(loginActionFailed(error));
			});
	};
};

const fetchUserDetailAsync = () => {
	return (dispatch, getState, baseURL) => {
		const { username, password } = getState();
		console.log(username, password);
		axios
			.get(`${baseURL}/users/`, {
				auth: {
					username,
					password,
				},
				headers: {
					// Authorization using token : `Bearer ${token}`
				},
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {});
	};
};

export {
	loginActionAsync,
	loginActionFailed,
	loginActionStart,
	loginActionSuccess,
	fetchUserDetailAsync,
};

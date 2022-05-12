import axios from "axios";

const fetchPostStart = {
	type: "post/fetch-start",
};

const fetchPostSuccess = (payload) => ({
	type: "post/fetch-success",
	payload,
});

const fetchPostFailed = (payload) => ({
	type: "post/fetch-failed",
	payload,
});

const fetchPostAsync = () => {
	return function (dispatch, getState) {
		dispatch(fetchPostStart);
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((response) => {
				// console.log(response);
				dispatch(fetchPostSuccess(response.data));
			})
			.catch((error) => {
				// handle error di sini
				dispatch(fetchPostFailed(error));
			});
	};
};

export { fetchPostAsync };

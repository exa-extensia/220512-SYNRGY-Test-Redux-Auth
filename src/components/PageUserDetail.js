import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserDetailAsync } from "../redux/actions";

export default function UserDetail() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUserDetailAsync());
	}, [dispatch]);
	return <div>USER DETAIL</div>;
}

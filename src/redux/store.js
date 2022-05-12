import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducerUser from "./reducers/reducerUser";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const baseURL = "https://basic-auth-example.herokuapp.com";

const store = createStore(
	reducerUser,
	composeEnhancers(applyMiddleware(thunk.withExtraArgument(baseURL)))
);

export default store;

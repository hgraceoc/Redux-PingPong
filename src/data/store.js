import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import persistState from "redux-localstorage";

import reducer from "../data/reducers";
import initial from "../data/initial";


const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initial,
  composeEnhancers(applyMiddleware(thunk))
);


export default store;
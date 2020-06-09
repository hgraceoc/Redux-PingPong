import { createStore } from "redux";
import persistState from "redux-localstorage";

import reducer from "../data/reducers";
import initial from "../data/initial";

const store = createStore(
    reducer, 
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );


export default store;
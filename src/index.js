import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import persistState from "redux-localstorage";

import store from "./data/store";
import initial from "../src/data/initial";
import reducer from "../src/data/reducers";

import { Provider } from "react-redux";


 const state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={ store }>
      <App
        player1 = {state.player1}
        player2 = {state.player2}
        player1Serving = {state.player1Serving}
        winner = {state.winner}
        history = {state.history}
        handleIncrementP1={ () => store.dispatch({ type: "INCREMENT_P1"})}
        handleIncrementP2={ () => store.dispatch({ type: "INCREMENT_P2"})}
        reset={ () => store.dispatch({ type: "RESET"})}
      />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

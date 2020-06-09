import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import persistState from "redux-localstorage";

import store from "./data/store";
import initial from "../src/data/initial";

const render = () => {
  let state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <App
        player1 = {state.player1}
        player2 = {state.player2}
        player1Serving = {state.player1Serving}
        winner = {state.winner}
        handleIncrementP1={ () => store.dispatch({ type: "INCREMENT_P1"})}
        handleIncrementP2={ () => store.dispatch({ type: "INCREMENT_P2"})}
        reset={ () => store.dispatch({ type: "RESET"})}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}; 

store.subscribe(render);
render();

store.dispatch({ type: "INCREMENT" });
//dispatch - writing the state




// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



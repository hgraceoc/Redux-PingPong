import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import persistState from "redux-localstorage";

const initial = {
  player1: 0,
  player2: 0,
  player1Serving: true,
  winner: 0, 
};

const incrementP1 = (state) => {
  return {
    ...state, 
    player1 : state.player1 + 1
  }
}

const incrementP2 = (state) => {
  return {
    ...state, 
    player2 : state.player2 + 1
  }
}

const setServer = (state) => {
  return {
    ...state,
    player1Serving: (state.player1 + state.player2) % 5 === 0 ? !state.player1Serving : state.player1Serving
  }
}

const setWinner = (state) => {
  return { 
    ...state, 
    winner: (state.player1 >= 21 ? 1 : state.player2 >= 21 ? 2 : 0)
  }

}


const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_P1": return setWinner(setServer(incrementP1(state)));

    case "INCREMENT_P2": return setWinner(setServer(incrementP2(state)));
    // case "INCREMENT_P2": return {
    //   ...state, 
    //   player2: state.player2 + 1
    // };
    case "RESET": return initial 
    default: return state;
  }
};
//any changes to the state, can only be set in the reducer 


const store = createStore(
  reducer, 
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


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

//render, not meant to be in the subscribe method - just for today! 
//get state - reading the state


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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import { createStore } from "redux";
import persistState from "redux-localstorage";


const initial = {
    player1: 0,
    player2: 0,
    player1Serving: true,
    winner: 0, 
  };

  export default initial;
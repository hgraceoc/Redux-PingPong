import { createStore } from "redux";
import persistState from "redux-localstorage";

import initial from "../data/initial";

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
  
  const scoreDIff = (state) => {
    return {
      ...state, 
      
    }
    
  
  }
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT_P1": return setWinner(setServer(incrementP1(state)));
      //setWinner will be called on the data that is returned from incrementP1 & setServer
  
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

  export default reducer;
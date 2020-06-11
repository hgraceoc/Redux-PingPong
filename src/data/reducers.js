import { createStore } from "redux";
import persistState from "redux-localstorage";

import initial from "../data/initial";


const incrementP1 = (state) => {
  return {
    ...state,
    player1Score: state.player1Score + 1
  }
}

const incrementP2 = (state) => {
  return {
    ...state,
    player2Score: state.player2Score + 1
  }
}

const above20 = (state) => {
  return (state.player1Score && state.player2Score >= 20) ? true : false;
};

const setServer = (state) => {
  return {
    ...state,
    player1Serving:
      above20(state) ? ((state.player1Score + state.player2Score) % 1 === 0 ? !state.player1Serving : state.player1Serving) :

        (state.player1Score + state.player2Score) % state.alternate === 0 ? !state.player1Serving : state.player1Serving
  }
}

const diff = (state) => {
  return Math.abs(state.player1Score - state.player2Score);
}
//Math.abs will only return a positive difference 


const setWinner = (state) => {
  return {
    ...state,
    winner: (state.player1Score >= (state.winningScore) && diff(state) >= 2 ? 1 : state.player2Score >= (state.winningScore) && diff(state) >= 2 ? 2 : 0)
  }

}

const storeResult = (state) => {
  if (state.winner > 0) {
    return {
      ...state,
      history: [
        ...state.history,

        {
          player_1: {
            score: state.player1Score,
            won: state.winner === 1 
          },

          player_2: {
            score: state.player2Score,
            won: state.winner === 2 
          }
        }

      ]
    }
  } else {
    return state
  }

}

const setMatch = (state, action) => (
  {
    ...state,
    player1: action.data.player1,
    player2: action.data.player2,
    winningScore: action.data.winningScore,
    alternate: action.data.alternate
  }
)



const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_P1": return storeResult(setWinner(setServer(incrementP1(state))));
    //setWinner will be called on the data that is returned from incrementP1 & setServer

    case "INCREMENT_P2": return storeResult(setWinner(setServer(incrementP2(state))));
    // case "INCREMENT_P2": return {
    //   ...state, 
    //   player2Score: state.player2Score + 1
    // };
    case "SET_MATCH": return setMatch(state, action);

    case "RESET": return {

    ...initial, 
    history: state.history,
    player1: state.player1,
    player2: state.player2,
    winningScore: state.winningScore,
    alternate: state.alternate
    }
    default: return state;
    //when resetting, return initial state - but maintain the updated states of history, player names and winning score
  }
};
//any changes to the state, can only be set in the reducer 

export default reducer;
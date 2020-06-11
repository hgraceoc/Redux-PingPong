import persistState from "redux-localstorage";


const initial = {
    player1Score: 0,
    player2Score: 0,
    player1Serving: true,
    winner: 0, 
    history: [],
    player1: "",
    player2: "",
    winningScore: 21,
    alternate: 0,
  };

  export default initial;
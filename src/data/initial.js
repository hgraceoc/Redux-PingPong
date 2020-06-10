import persistState from "redux-localstorage";


const initial = {
    player1Score: 0,
    player2Score: 0,
    player1Serving: true,
    winner: 0, 
    history: [
        {
            player_1: {
                score: 21,
                won: true
            },
        
            player_2: {
                score: 17,
                won: false
            }
        }
    ],
  };

  export default initial;
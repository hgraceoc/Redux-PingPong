import { connect } from "react-redux";

import Player from "./Player";
//import the component that we want to wrap

 const mapStateToProps = state => {
  return {
    score: state.player1Score,
    playerName: "Player 1",
    serving: state.player1Serving,
    winner: state.winner
  };
};

export default connect(mapStateToProps)(Player);
// use the connect function to connect mapStateToProps
// to the React component we want to wrap
// returns a new React component
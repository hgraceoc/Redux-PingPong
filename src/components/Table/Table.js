import { connect } from "react-redux";

import ResultTable from "./Table";
//import the component that we want to wrap

 const mapStateToProps = state => {
  return {
    playerOneScore: state.player1Score,
    playerTwoScore: state.player2Score,
    playerOne: "Player 1",
    playerTwo: "Player 2",
    winner: state.winner
  };
};

export default connect(mapStateToProps)(ResultTable);
// use the connect function to connect mapStateToProps
// to the React component we want to wrap
// returns a new React component
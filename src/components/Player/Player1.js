import { connect } from "react-redux";

import { incrementP1 } from "../../data/actions";

import Player from "./Player";
//import the component that we want to wrap

 const mapStateToProps = state => {
  return {
    score: state.player1Score,
    playerName: state.player1,
    serving: state.player1Serving,
    winner: state.winner,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrementP1: () => dispatch(incrementP1()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
// use the connect function to connect mapStateToProps
// to the React component we want to wrap
// returns a new React component
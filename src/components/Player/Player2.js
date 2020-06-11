import { connect } from "react-redux";

import { incrementP2 } from "../../data/actions/state";

import Player from "./Player";
//import the component that we want to wrap

 const mapStateToProps = state => {
  return {
    score: state.player2Score,
    playerName: state.player2,
    serving: !state.player1Serving,
    winner: state.winner,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrementP2: () => dispatch(incrementP2()),
  }
}

export default connect(mapStateToProps)(Player);
// use the connect function to connect mapStateToProps
// to the React component we want to wrap
// returns a new React component
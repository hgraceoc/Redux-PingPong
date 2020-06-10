import { connect } from "react-redux";

import ResultTable from "../ResultTable";
//import the component that we want to wrap

 const mapStateToProps = state => {
  return {
      history: state.history,
      player1Score: state.player1Score,
      player1: state.player1,
      player2: state.player2
  };
};

export default connect(mapStateToProps)(ResultTable);

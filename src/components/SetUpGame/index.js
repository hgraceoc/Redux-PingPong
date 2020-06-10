import { connect } from "react-redux";


import SetUpGame from "./SetUpGame";
const mapStateToProps = state => {
  return {
    player1: state.player1,
    player2: state.player2,
  };
};
export default connect(mapStateToProps)(SetUpGame);
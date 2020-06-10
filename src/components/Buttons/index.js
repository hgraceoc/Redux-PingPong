import { connect } from "react-redux";
import { incrementP1 } from "../../data/actions";

import Button from "./Button";


 const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrementP1: () => dispatch(incrementP1())
  };
};

export default connect(null, mapDispatchToProps)(Button);

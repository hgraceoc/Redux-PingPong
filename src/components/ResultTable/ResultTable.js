import { connect } from "react-redux";

import ResultTable from "../ResultTable";
//import the component that we want to wrap

 const mapStateToProps = state => {
  return {
      history: state.history
  };
};

export default connect(mapStateToProps)(ResultTable);

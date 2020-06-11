import { connect } from "react-redux";

import Value from "./Value";
//importing the value that we want to wrap

const mapStateToProps = (state) => {
    return {
        value: state.value,
    };
}


export default connect(mapStateToProps)(Value);
//higher order function - a function that returns a function 
import { connect } from "react-redux";

import history from "../../history";
import SetUpGame from "./SetUpGame";
import { setMatch } from "../../data/actions/state";

const mapStateToProps = (state) => {
    return {
        player1: state.player1,
        player2: state.player2,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: data => {
            
            dispatch(setMatch(data));
            
            history.push("/");
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SetUpGame);
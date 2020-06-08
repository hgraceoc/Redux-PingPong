import React from "react";

const App = ({
  player1,
  player2,
  handleIncrementP1,
  handleIncrementP2,
  reset,
  player1Serving,
  winner,
}) => (
    <React.Fragment>
      {/* header */}
      <header className="jumbotron mt-4 mb-0">
        <h1>PongPing</h1>
      </header>

      {/* scores */}
      <div className="row mb-4">
        <div className="col-md-6 mt-4">
          <div className={"card text-center" + (player1Serving ? " bg-dark text-white" : "")}>
            <h5 className="card-header">Player 1</h5>
            <div className="card-body">
              <p className="card-text display-1">{player1}</p>
            </div>
            <div className="card-footer">
              <button className={"form-control btn btn-success" + (winner === 0 ?  " " : " disabled")}
                onClick={handleIncrementP1}
              >+</button>
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-4">
          <div className={"card text-center" + (player1Serving ? " " : " bg-dark text-white")}>
            <h5 className="card-header">Player 2</h5>
            <div className="card-body">
              <p className="card-text display-1">{player2}</p>
            </div>
            <div className="card-footer">
              <button className={"form-control btn btn-success" + (winner === 0 ?  " " : " disabled")}
                onClick={handleIncrementP2}
              >+</button> 
            </div>
          </div>
        </div>
      </div>

      { /* winner message */}

      {winner === 0 ? null :
        <h2 className="alert alert-success">Player {winner} wins!</h2>
      }


      <hr />

      { /* reset button */}
      <button className="btn btn-danger"
        onClick={reset}>Reset</button>
    </React.Fragment>
  );

export default App;

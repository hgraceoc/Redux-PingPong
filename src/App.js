import React from "react";
import Header from "./components/Header";
import PlayerCard from "./components/PlayerCard";

import Player1 from "./components/Player/Player1";
import Player2 from "./components/Player/Player2";

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
      <Header />

      {/* scores */}
      <div className="row mb-4">
        <Player1
          handleIncrement={handleIncrementP1}
        ></Player1>

        <Player2
          handleIncrement={handleIncrementP2}
        ></Player2>
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

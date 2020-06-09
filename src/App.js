import React from "react";
import Header from "./components/Header";
import PlayerCard from "./components/PlayerCard";

import Value from "./components/Value";

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
        <PlayerCard
          player="Player 1"
          winner={winner}
          playerNum={player1}
          handleIncrement={handleIncrementP1}
        ></PlayerCard>

        <PlayerCard
          player="Player 2"
          winner={winner}
          playerNum={player2}
          handleIncrement={handleIncrementP2}
        ></PlayerCard>
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

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import Header from "./components/Header";
import PlayerCard from "./components/PlayerCard";

import Player1 from "./components/Player/Player1";
import Player2 from "./components/Player/Player2";
import ResultTable from "./components/ResultTable/ResultTable";
import SetUpGame from "./components/SetUpGame";

import history from "../src/history";

const App = ({
  player1,
  player2,
  handleIncrementP1,
  handleIncrementP2,
  reset,
  player1Serving,
  winner,
}) => (
    <Router history={ history }>
      <React.Fragment>
        <Header />

        <Route exact path="/">
          <>
            <Link className="m-4" to="/set-up">Set Up Game</Link>
          
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
          <button className="btn btn-danger m-4"
            onClick={reset}>Reset</button>

          <ResultTable />
        </>
        </Route>

        <Route exact path="/set-up">
          <>
          <SetUpGame />
          <Link className="m-4" to="/">Home</Link>
          </>
        </Route>


      </React.Fragment>
    </Router>
  );

export default App;

import React, { Component } from "react";
import initial from "../data/initial";
import reducer from "../data/reducers";


const PlayerCard = ({ 
    playerNum, 
    player,
    winner, 
    player1Serving, 
    handleIncrement }) => (

            <div className="col-md-6 mt-4">
            <div className={"card text-center" + (player1Serving ? " bg-dark text-white" : "")}>
              <h5 className="card-header">{ player }</h5>
              <div className="card-body">
                <p className="card-text display-1">{ playerNum }</p>
              </div>
              <div className="card-footer">
                <button className={"form-control btn btn-success" + (winner === 0 ?  " " : " disabled")}
                  onClick={handleIncrement}
                >+</button>
              </div>
            </div>
            </div>
        );
 


export default PlayerCard; 
import React, { Component } from "react";
import initial from "../../data/initial";

class SetUpGame extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      player1: props.player1,
      player2: props.player2,
    };

    this.setPlayer1 = this.setPlayer1.bind(this);
    this.setPlayer2 = this.setPlayer2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  setPlayer1(e) {
    this.setState({ player1: e.currentTarget.value });
  }
  setPlayer2(e) {
    this.setState({ player2: e.currentTarget.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state)
  }
  render() {
    let { player1, player2 } = this.state;
    

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group m-4">
          <label>Player1</label>
          <input
            className="form-control"
            onChange={this.setPlayer1}
            value={player1}
          />
          <label>Player2</label>
          <input
            className="form-control"
            onChange={this.setPlayer2}
            value={player2}
          />

          {/* <label>Set Winning Score</label>
          <input
            className="form-control"
            onChange={this.handleChange}
            value={winningScore}
            type="number"
          /> */}

        </div>
        <button className="btn btn-primary m-4">Save</button>
      </form>
    );
  }
}
export default SetUpGame;
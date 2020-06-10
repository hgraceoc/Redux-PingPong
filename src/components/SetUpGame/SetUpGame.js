import React, { Component } from "react";
class SetUpGame extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      player1: props.player1,
      player2: props.player2,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ step: e.currentTarget.value });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    let { player1, player2, winningScore } = this.state;
    

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group m-4">
          <label>Player1</label>
          <input
            className="form-control"
            onChange={this.handleChange}
            value={player1}
          />
          <label>Player2</label>
          <input
            className="form-control"
            onChange={this.handleChange}
            value={player2}
          />

          <label>Set Winning Score</label>
          <input
            className="form-control"
            onChange={this.handleChange}
            value={winningScore}
            type="number"
          />

        </div>
        <button className="btn btn-primary m-4">Save</button>
      </form>
    );
  }
}
export default SetUpGame;
import React from 'react'

class PlayerOne extends React.Component {

  constructor() {
    super();
    this.state = {
			name: "<name from input field>",
      number: 0,
      button: "Play"
		  };
  }


  render() {
    const PlayerOneVar = (
      <fieldset>
      <b>Player One</b> <br /> <br /> <br />
      Name:&emsp; {this.state.name} <br /> <br />
      Played number of times:&emsp; {this.state.number}
      <input type="button" value={this.state.button} style={{float: 'right', width: 200}} />
      </fieldset>
    )
    return PlayerOneVar
  }
  
}

export default PlayerOne
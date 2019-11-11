import React from 'react'

class PlayerTwo extends React.Component {

  constructor() {
    super();
    this.state = {
			name: "<name from input field>",
      number: 0,
      button: "Play"
		  };
  }


  render() {
    const PlayerTwoVar = (
      <fieldset>
      <b>Player Two</b> <br /> <br /> <br />
      Name:&emsp; {this.state.name} <br /> <br />
      Played number of times:&emsp; {this.state.number}
      <input type="button" value={this.state.button} style={{float: 'right', width: 200}} />
      </fieldset>
    )
    return PlayerTwoVar
  }
  
}

export default PlayerTwo
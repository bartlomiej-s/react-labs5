import React from 'react'

class PlayerOne extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
			name: "<name from input field>",
      number: 0,
      button: 0
    }
    this.changeName = this.changeName.bind(this)
    this.click = this.click.bind(this)
    this.count = this.count.bind(this)
  }

  changeName(nameNew) {
    this.setState({
      name: nameNew
    })
  }

  click() {
    this.setState({
      button: (this.state.button + 1) % 2
    })
  }

  count() {
    this.setState({
      number: this.state.number + 1
    })
  }


  render() {
    let d = ""
    let text =  "Play"
    if (this.state.button == 1)
    {
      d = "disabled"
      text = "This user is playing now"
    }
    const PlayerOneVar = (
      <fieldset>
      <b>Player One</b> <br /> <br /> <br />
      Name:&emsp; {this.state.name} <br /> <br />
      Played number of times:&emsp; {this.state.number}
      <input type="button" value={text} onClick={this.props.click} style={{float: 'right', width: 200}} disabled={d}/>
      </fieldset>
    )
    return PlayerOneVar
  }
  
}

export default PlayerOne
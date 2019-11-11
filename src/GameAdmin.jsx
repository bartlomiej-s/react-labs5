import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameAdmin extends React.Component {

  player1 = new PlayerOne()
  player2 = new PlayerTwo()

  constructor(props) {
    super(props)
    this.change1 = this.change1.bind(this)
    this.change2 = this.change2.bind(this)
  }

  change1(evt) {
    this.player1.changeName(evt.target.value)
    this.forceUpdate()
  }

  change2(evt) {
    this.player2.changeName(evt.target.value)
    this.forceUpdate()
  }

  render() {
    const GameAdminVar = (
      <div>
      {this.player1.render()} <br />
      {this.player2.render()} <br /> <br />
      <hr /> <br />
      <p>
        Set Name of Player One: <input type="text" name="player1" onChange={this.change1} style={{float: 'right', width:'85%'}}/> <br /> <br /> <br />
        Set Name of Player Two: <input type="text" name="player2" onChange={this.change2} style={{float: 'right', width:'85%'}}/>
      </p>
      </div>
    )
    return GameAdminVar
  }

}

export default GameAdmin
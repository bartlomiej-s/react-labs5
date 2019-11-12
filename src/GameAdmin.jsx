import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameAdmin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
			clicked: false
    }
    this.player1 = React.createRef()
    this.player2 = React.createRef()
    this.change1 = this.change1.bind(this)
    this.change2 = this.change2.bind(this)
    this.click1 = this.click1.bind(this)
    this.click2 = this.click2.bind(this)
  }

  change1(evt) {
    this.player1.changeName(evt.target.value)
  }

  change2(evt) {
    this.player2.changeName(evt.target.value)
  }

  click1() {
    if (this.state.clicked == false)
    {
      this.player1.click()
      this.setState({
        clicked: true
      })
    }
    else
    {
      this.player1.click()
      this.player2.click()
    }
    this.player1.count()
  }

  click2() {
    if (this.state.clicked == false)
    {
      this.player2.click()
      this.setState({
        clicked: true
      })
    }
    else
    {
      this.player1.click()
      this.player2.click()
    }
    this.player2.count()
  }

  render() {
    const GameAdminVar = (
      <div>
      <PlayerOne ref={el => this.player1 = el} click={this.click1}/> <br />
      <PlayerTwo ref={el => this.player2 = el} click={this.click2}/> <br /> <br />
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
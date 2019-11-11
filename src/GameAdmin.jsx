import React from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'

class GameAdmin extends React.Component {

  constructor() {
    super();
  }


  render() {
    const GameAdminVar = (
      <div>
      <PlayerOne /> <br />
      <PlayerTwo /> <br /> <br />
      <hr /> <br />
      <p>
        Set Name of Player One: <input type="text" name="player1" style={{float: 'right', width:'85%'}}/> <br /> <br /> <br />
        Set Name of Player Two: <input type="text" name="player2" style={{float: 'right', width:'85%'}}/>
      </p>
      </div>
    )
    return GameAdminVar
  }

}

export default GameAdmin
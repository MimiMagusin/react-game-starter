import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import getCurrentGame from '../actions/games/get'
import fetchGames from '../actions/games/fetch'
import subscribeToGames from '../actions/games/subscribe'
import Riddle from '../components/games/Riddle'
import GuessEditor from '../components/games/Guess'
import StartGame from '../components/games/StartGame'
import './Game.css'


class Game extends PureComponent {
  componentWillMount() {
    const { game, fetchGames, getCurrentGame, subscribeToGames, subscribed} = this.props
    const { gameId } = this.props.match.params
    if (!game) fetchGames()
    getCurrentGame(gameId)
    if (!subscribed) subscribeToGames()
  }

  renderRiddle(riddle, index) {
    return <Riddle
      key={index} { ...riddle } />
  }

  lastRiddle() {
    const { currentPlayer } = this.props
    return currentPlayer.question[currentPlayer.question.length - 1]
  }

  render() {
    const { game, currentPlayer } = this.props

    if (!game) return null

    if (!currentPlayer) {
      return (
        <div className="Game">
          <h1 className="Riddle">Riddle!</h1>
          <p>Join the game...</p>
          <p>Coming up soon!</p>
        </div>
      )
    }

    if (game.started === false) return (
      <div className="Game">
        <h1 className="Riddle">Riddle!</h1>
        <StartGame />
      </div>
    )

    return (
      <div className="Game">
        <h1 className="Riddle">Riddle!</h1>

        <div className="Question"><p>{this.lastRiddle()}</p></div>

        <GuessEditor />
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, currentGame, games, subscriptions }) => {
  const game = games.filter((g) => (g._id === currentGame))[0]
  const currentPlayer = game && game.players.filter((p) => (p.userId === currentUser._id))[0]

  return {
    currentPlayer,
    game,
    subscribed: subscriptions.includes('games'),
  }
}

export default connect(mapStateToProps, {
  getCurrentGame,
  fetchGames,
  subscribeToGames,
})(Game)

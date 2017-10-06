import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import startGame from '../../actions/games/startGame'

class StartGameButton extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool,
  }

  start = () => {
    const { startGame, currentGame } = this.props
    startGame(currentGame)
  }

  render() {
    if (!this.props.signedIn) return null

    return (
      <div className="StartGameButton">
        <RaisedButton
          label="Start Game"
          primary={true}
          onClick={this.start} />
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, currentGame }) => ({
  signedIn: !!currentUser && !!currentUser._id, currentGame
})

export default connect(mapStateToProps, { startGame })(StartGameButton)

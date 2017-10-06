// src/recipes/RecipeEditor.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import guess from '../../actions/games/guess'
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  margin: 12,
};



class GuessAnswer extends PureComponent {
  constructor(props) {
    super()

    const answer = props

    this.state = answer
  }

  updateAnswer(event) {
    if (event.keyCode === 13) {
      this.saveGuess()
    }
  }

  saveGuess() {
    const { currentGame } = this.props
    const guess = this.refs.answer.value.toLowerCase()
    this.props.guess(currentGame, guess)
    this.refs.answer.value=null

  }

  render() {

    return (
      <div className="guessAnswer">
        <input
          type="text"
          ref="answer"
          className="answer"
          placeholder="Write your answer"
          defaultValue={this.state.answer}
          value={this.state.answer}
          onChange={this.updateAnswer.bind(this)} />


        <div className="actions">
          <RaisedButton label="Submit Answer!" primary={true} style={style} onClick={this.saveGuess.bind(this)}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ( { guess, currentGame } ) => {
  return {
    guess,
    currentGame
  }
}

export default connect(mapStateToProps, {guess})(GuessAnswer)

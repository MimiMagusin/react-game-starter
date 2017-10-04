// src/recipes/RecipeEditor.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import guess from '../../actions/games/guess'


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

    const guess = this.refs.answer.value.toLowerCase()
    this.props.guess(guess)
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
          <button className="primary" onClick={this.saveGuess.bind(this)}>Submit Answer!</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ( { guess } ) => {
  return {
    guess
  }
}

export default connect(mapStateToProps, {guess})(GuessAnswer)

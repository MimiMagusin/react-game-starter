// src/recipes/RecipeEditor.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import guess from '../../actions/games/guess'


class GuessAnswer extends PureComponent {
  constructor(props) {
    super()

    const { answer } = props // check why curly braces?

    this.state = {
      answer,
    }
  }

  updateAnswer(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      answer: event.target.value
    })
  }


  validate() {
    const isAnswerValid = this.validateAnswer()

    this.setState({
      errors: {
        title: isAnswerValid ? null : 'Add your answer!',
      }
    })
    return isAnswerValid
  }

  validateAnswer() {
    const { answer } = this.state
    return answer && answer.length > 0
  }

  saveGuess() {
    if (!this.validate()) return

    const {
      answer
    } = this.state

    const guess = {
      answer
    }

    this.props.save(guess)

    this.setState({
      answer
    })
  }

  render() {

    return (
      <div className="guessAnswer">
        <input
          type="text"
          ref="answer"
          className="answer"
          placeholder="Write your answer"
          value={this.state.answer}
          onChange={this.updateAnswer.bind(this)} />


        <div className="actions">
          <button className="primary" onClick={this.saveGuess.bind(this)}>Submit Answer!</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { save: guess }

export default connect(null, mapDispatchToProps)(GuessAnswer)

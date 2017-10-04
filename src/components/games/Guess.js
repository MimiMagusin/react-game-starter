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
    // this.setState({
    //   answer: event.target.value
    // })
  }


  // validate() {
  //   const isAnswerValid = this.validateAnswer()
  //
  //   this.setState({
  //     errors: {
  //       title: isAnswerValid ? null : 'Add your answer!',
  //     }
  //   })
  //   return isAnswerValid
  // }

  // validateAnswer() {
  //   const { answer } = this.state
  //   return answer && answer.length > 0
  // }

  saveGuess() {

    const guess = this.refs.answer.value.toLowerCase()
    this.props.guess(guess)
    this.refs.answer.value=null

    // if (!this.validate()) return
    //
    // const {
    //   answer
    // } = this.state
    //
    // const guess = {
    //   answer
    // }
    //
    // this.props.save(guess)
    //
    // this.setState({
    //   answer
    // })
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

//const mapDispatchToProps = { save: guess }

export default connect(mapStateToProps, {guess})(GuessAnswer)

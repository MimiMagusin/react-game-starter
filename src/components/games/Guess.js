import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
//import toMarkdown from 'to-markdown' -> maybe for guess?
//import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'

export class GuessEditor extends PureComponent {
  constructor(props){
    super()

    const {  guess, playerID } = props

    this.state = {
      guess,
      playerID,
    }
  }

  updateGuess(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      title: event.target.value
    })
  }

  saveGuess() {

    const { guess, playerID } = this.state

    const Guess = {
      guess,
      playerID,
    }

    this.props.save(Guess).bind(this)

    this.setState({
      guess: '',
      playerID: '',
    })
  }

  render() {
    return (
      <div className="editor">
        <input
          type="text"
          ref="guess"
          className="guess"
          placeholder="Your Answer"
          value={this.state.guess}
          onChange={this.updateGuess.bind(this)}
          />

        <div className="actions">
          <button className="primary" onClick={this.saveGuess.bind(this)}>Answer</button>
        </div>
      </div>
    )
  }
}

export default GuessEditor

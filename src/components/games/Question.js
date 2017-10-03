// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
//import { connect } from 'react-redux'
//import updateGame from '../actions/recipes/update'
//import fetchRiddles from '../actions/games/fetch'


export class Question extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }


  render() {
    const { _id, question, answer } = this.props

    return(
      <article className="Question">
        <div>
          <p>Our question. Hopefully soon.</p>
        </div>
      </article>
    )
  }
}

export default Question

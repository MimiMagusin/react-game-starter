// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import updateGame from '../actions/recipes/update'
import fetchRiddles from '../../actions/riddles/fetchRiddles'


export class Question extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    riddles: PropTypes.string.isRequired,
    fetchRiddles: PropTypes.func.isRequired,

  }

componentWillMount() {
        this.props.fetchRiddles()
      }



render() {
  const { _id, question, answer, riddles } = this.props
    return(
      <article className="Question">
        <div>
          <p>{ riddles.map(riddle => riddle.question )}</p>
        </div>
      </article>
    )
  }
}

const mapStateToProps = ({ riddles }) => ({ riddles })

export default connect(mapStateToProps, { fetchRiddles })(Question)

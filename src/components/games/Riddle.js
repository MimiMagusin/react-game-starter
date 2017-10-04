import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export class Riddle extends PureComponent {
  static propTypes = {

    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }

  render() {
      const { question, answer } = this.props

      return(
        <article className="Riddles">
          <header>
            <h1>{ question }</h1>
          </header>
          <div>
            <p>{ answer }</p>
          </div>

        </article>
      )
    }


}

export default Riddle

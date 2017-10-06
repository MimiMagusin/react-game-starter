import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'



export class Riddle extends PureComponent {
  static propTypes = {
    question: PropTypes.string.isRequired,
  }

  render() {
      const { question } = this.props

      return(
        <article className="Riddles">
          <header>
            <h1 className="question">{ question }</h1>
          </header>
          </article>
      )
    }


}

export default Riddle

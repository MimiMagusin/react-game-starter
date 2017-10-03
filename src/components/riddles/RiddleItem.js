import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export class RiddleItem extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    riddle: PropTypes.string.isRequired,
  }

  render() {
    const { _id, riddle } = this.props

    return(
      <article className="RiddleItem">

        <div>
          <p>{ riddle }</p>
        </div>

      </article>
    )
  }
}

export default RiddleItem

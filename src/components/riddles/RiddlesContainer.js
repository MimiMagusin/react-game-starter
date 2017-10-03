import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/riddles/Title'
import RiddleItem from './RiddleItem'
import fetchGames from '../actions/games/fetch'


export class RiddlesContainer extends PureComponent {
  static propTypes = {
    riddles: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchGames()

  }

  renderRiddle(riddle, index) {
    return <RiddleItem
      key={index} { ...riddle } />
  }

  render() {
    return(
      <div className="riddles wrapper">
        <header>
          <Title content="Riddles" />
        </header>

        <main>
          { this.props.riddles.map(this.renderRiddle.bind(this)) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ riddles }) => ({ riddles })
const mapDispatchToProps = { fetchGames }

export default connect(mapStateToProps, mapDispatchToProps)(RiddlesContainer)

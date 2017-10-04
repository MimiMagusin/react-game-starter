import { GUESS } from '../actions/games/guess'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case GUESS :
    return state.concat(payload)

      default :
          return state
      }
  }

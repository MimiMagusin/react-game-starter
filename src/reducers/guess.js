import { GUESS } from '../actions/guess'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case GUESS :
    return [].push(payload)

      default :
          return state
      }
  }

import { GET_GAME } from '../actions/games/get'
import { JOIN_GAME } from '../actions/games/join'
import { START_GAME } from '../actions/games/startGame'

export default (state = null, { type, payload } = {}) => {
  switch (type) {
    case JOIN_GAME :
    case GET_GAME :
      return payload._id

    case START_GAME :
      return payload

    default :
      return state
  }
}

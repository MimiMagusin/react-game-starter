import { FETCHED_RIDDLES } from '../actions/riddles/fetchRiddles'


export default (state = [], { type, payload } = {}) => {
  switch (type) {

    case FETCHED_RIDDLES :
      return [].concat(payload)

    default :
      return state
  }
}

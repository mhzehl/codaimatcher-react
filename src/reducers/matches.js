import { FETCHED_MATCHES } from '../actions/matches/fetch'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_MATCHES :
      return [].concat(payload)

    default :
      return state
  }
}

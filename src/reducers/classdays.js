import { FETCHED_CLASSDAY } from '../actions/classday/fetch'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_CLASSDAY :
      return [].concat(payload)

    default :
      return state
  }
}

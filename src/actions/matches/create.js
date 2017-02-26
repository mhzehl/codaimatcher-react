import API from '../middleware/api'
import loadError from './error'
import loadSuccess from './success'
import loading from './loading'

export const CREATE_MATCH = 'CREATE_MATCH'

const api = new API()
const matches = api.service('matches')

export default (newMatch) => {
  return (dispatch) => {
    dispatch(loading(true))
    console.log('NEW MATCH', newMatch)
    matches.create(newMatch)
    .then((response) => {
      dispatch(loadSuccess())
      dispatch({ type: CREATE_MATCH })
    })
    .catch((error) => {
      dispatch(loadError(error))
    })
    .then(() => {
      dispatch(loading(false))
    })
  }
}

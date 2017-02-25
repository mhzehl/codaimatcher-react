import API from '../../middleware/api'
import loadError from '../load/error.js'
import loadSuccess from '../load/success.js'
import loading from '../load/loading'

export const FETCHED_MATCHES = 'FETCHED_MATCHES'

const api = new API()
const matches = api.service('matches')

export default () => {
  return (dispatch) => {
    dispatch(loading(true))

    matches.find({
      query: {
        $limit: 25
      }
    })
    .then((response) => {
      dispatch(loadSuccess())
      dispatch({
        type: FETCHED_MATCHES,
        payload: response.data
      })
    })
    .catch((error) => {
      dispatch(loadError(error))
    })
    .then(() => {
      dispatch(loading(false))
    })
  }
}

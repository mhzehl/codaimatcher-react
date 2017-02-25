import API from '../../middleware/api'
import loadError from '../load/error.js'
import loadSuccess from '../load/success.js'
import loading from '../load/loading'

export const FETCHED_STUDENTS = 'FETCHED_STUDENTS'

const api = new API()
const users = api.service('users')

export default () => {
  return (dispatch) => {
    dispatch(loading(true))

    users.find({
      query: {
        $limit: 25
      }
    })
    .then((response) => {
      dispatch(loadSuccess())
      dispatch({
        type: FETCHED_STUDENTS,
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

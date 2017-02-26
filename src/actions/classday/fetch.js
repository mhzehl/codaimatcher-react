import API from '../../middleware/api'
import loadError from '../load/error.js'
import loadSuccess from '../load/success.js'
import loading from '../load/loading'

export const FETCHED_CLASSDAY = 'FETCHED_CLASSDAY'

const api = new API()
const classdays = api.service('classdays')

export default (currentUser) => {
  return (dispatch) => {
    dispatch(loading(true))

    classdays.find({
      query: {
        $limit: 1,
        createdAt: { '$gte': new Date().setHours(0, 0, 0) }
      }
    })
    .then((response) => {
      if (response.data.length) {
        dispatch(loadSuccess())
        dispatch({
          type: FETCHED_CLASSDAY,
          payload: response.data
        })
      }
      else {
        classdays.create({
          userId: currentUser._id
        })
        .then((response) => {
          dispatch({
            type: FETCHED_CLASSDAY,
            payload: response
          })
        })
        .catch((error) => {
          dispatch(loadError(error))
        })
      }
    })
    .catch((error) => {
      dispatch(loadError(error))
    })
    .then(() => {
      dispatch(loading(false))
    })
  }
}

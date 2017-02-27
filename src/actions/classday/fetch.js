import API from '../../middleware/api'
import loadError from '../load/error.js'
import loadSuccess from '../load/success.js'
import loading from '../load/loading'

export const FETCHED_CLASSDAY = 'FETCHED_CLASSDAY'

const api = new API()
const classdays = api.service('classdays')

export default () => {
  return (dispatch) => {
    dispatch(loading(true))

    api.app.authenticate()
    .then((response) => {
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
          // ToDo:
          // Find my pair in response.data[0].pairs
          // Fetch user where _id is in my pair
          // Store in state by dispatching an action
        }
        else {
          classdays.create({})
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
    })
  }
}

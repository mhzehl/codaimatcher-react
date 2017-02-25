import API from '../../middleware/api'

export const FETCHED_MATCHES = 'FETCHED_MATCHES'

const api = new API()
const matches = api.service('matches')

export default () => {
  return (dispatch) => {
    console.log('Fetching matches...')
    matches.find()
      .then((result) => {
        console.log('Results are in!', result)
        dispatch(fetchedMatches(result))
      })
  }
}

const fetchedMatches = (result) => {
  console.log('dispatching fetchedRecipes')
  return {
    type: FETCHED_MATCHES,
    payload: [].concat(result.data)
  }
}

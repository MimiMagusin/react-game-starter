import API from '../../api'


export const FETCHED_RIDDLES = 'FETCHED_RIDDLES'

const api = new API()

export default () => {
  return (dispatch) => {
    const backend = api.service('riddles')
    backend.find({
      query: {
        $limit: 50,
        $sort: {
          createdAt: -1
        }
      }
    })
      .then((result) => {
        dispatch({
          type: FETCHED_RIDDLES,
          payload: result.data
        })
      })
      .catch((error) => {

      })
  }
}

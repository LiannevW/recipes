import ApiClient from '../../api/client'
// import loading from '../loading' // ???
// import loadError from '../loadError' // ???
export const SIGN_UP = 'SIGN_UP'


const api = new ApiClient()

export default (users) => {
  return dispatch => {
    // dispatch(loading(true)) // ???

    api.post('users', users)
      .then(res => dispatch({ type: SIGN_UP, payload: res.body }))

      //.catch(err => dispatch(loadError(err))) ???
      // dispatch(loading(false)) // ???
  }
}

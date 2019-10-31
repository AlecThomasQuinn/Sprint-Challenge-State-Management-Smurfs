import axios from 'axios'

export const SMURFS_ARE_LOADING = 'SMURFS_ARE_LOADING';
export const SMURFS_HAVE_LOADED = 'SMURFS_HAVE_LOADED';
export const SMURF_LOADING_ERROR = 'SMURF_LOADING_ERROR';

export function loadSmurfs() {
    return (dispatch) => {
    dispatch({type: SMURFS_ARE_LOADING})

    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({type: SMURFS_HAVE_LOADED, payload: response.data})
    })
    .catch(error => {
      dispatch({type: SMURF_LOADING_ERROR, payload: error })
    })
  }

}
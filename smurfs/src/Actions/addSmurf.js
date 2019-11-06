import axios from 'axios'

export const BIRTH_SMURF = 'BIRTH_SMURF'
export const POST_SMURF = 'POST_SMURF'
export const SMURF_HAS_POSTED = 'SMURF_HAS_POSTED'
export const SMURF_POSTING_ERROR = 'SMURF_POSTING_ERROR'


export function addSmurf(name, age, height) {
    return (dispatch) => {
        dispatch({ type: BIRTH_SMURF, payload: {name, age, height }});
    }
}

export function postSmurf(smurf) {
    return (dispatch) => {
        dispatch({type: POST_SMURF})

        axios.post('http://localhost:3333/smurfs', smurf)
        .then(response => {
            //dispatch({type: SMURF_HAS_POSTED, payload: response.data})
            console.log('post', response)
          })
        .catch(error => {
            //dispatch({type: SMURF_POSTING_ERROR, payload: error })
            console.log('post error', error)
        })
    }
};
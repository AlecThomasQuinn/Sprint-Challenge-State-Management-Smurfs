export const BIRTH_SMURF = 'BIRTH_SMURF'

export function addSmurf(name, age, height) {
    return (dispatch) => {
        dispatch({ type: BIRTH_SMURF, payload: name, age, height })
    }
}
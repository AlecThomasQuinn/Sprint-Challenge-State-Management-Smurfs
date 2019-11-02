import { BIRTH_SMURF } from '../Actions/addSmurf';
import { POST_SMURF } from '../Actions/addSmurf';


export const initialState = {
    newSmurf: [],
}

export function reducer(state = initialState, action) {
    switch (action.type){
        case BIRTH_SMURF:
            return{ 
                ...state,
                newSmurf: [ 
                    {
                       name: action.payload.name,
                       age: action.payload.age,
                       height: action.payload.height 
                    }
                ]
            }
        case POST_SMURF:
            return state
        default:
            return state
    }
}
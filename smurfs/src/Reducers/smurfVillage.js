import {
    SMURFS_ARE_LOADING,
    SMURFS_HAVE_LOADED,
    SMURF_LOADING_ERROR
  } from '../Actions/smurfVillage';

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: null

};

export function reducer(state = initialState, action) {
    switch (action.type){
        case SMURFS_ARE_LOADING:
            return{
                ...state, 
                isLoading: true,
            } 
        case SMURFS_HAVE_LOADED:
            return{
                ...state,
                smurfs: action.payload,
                isLoading: false,
            }
        case SMURF_LOADING_ERROR:
            return{
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}
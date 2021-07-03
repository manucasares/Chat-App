import { types } from "../types/types"


export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.authLogin:
            return {
                ...state,
                user: action.payload
            }
        
        default:
            return state;
    }
}

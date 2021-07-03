import { types } from "types/types";


export const login = ( email, name ) => ({
    type: types.authLogin,
    payload: { email, name }
})
    

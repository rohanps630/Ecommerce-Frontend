import { actionTypes } from "../actionTypes/actiontypes";
const nameInitialState = {authData:null}
 const authReducer = (user = nameInitialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH:
            localStorage.setItem('profile',JSON.stringify({...action?.data}));
            return {...user,authData:action?.data}
        case actionTypes.LOGOUT:
             localStorage.clear()
             return {...user,authData:null}
        default:
            return user
    }
}
export default authReducer
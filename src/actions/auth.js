import { actionTypes } from "../actionTypes/actiontypes";
import * as api from "../api"


export const signin = (formData,navigate,setErrors)=>async (dispatch)=>{
try {
    //login users
   
    const {data}=await api.signIn(formData,setErrors);
    console.log(data)
    dispatch({type:actionTypes.AUTH,data})
    navigate('/',{replace:true})
    } catch (error) {
        setErrors(error.response.data.message);
    }
}
export const signup = (formData,navigate)=>async (dispatch)=>{
    try {
     //signup users
     const {data}=await api.signUp(formData)
    console.log(data)

     dispatch({type:actionTypes.AUTH,data})
     navigate('/',{replace:true})
     navigate('/',{replace:true})
    } catch (error) {
    console.log(error)
    
    }
}
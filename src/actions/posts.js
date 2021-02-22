import { actionTypes } from "../actionTypes/actiontypes"
import * as api from "../api"

const getPosts=()=>async(dispatch)=>{
try {
    const {data}=await api.fetchPosts();
    dispatch({
        type:actionTypes.FETCH_POSTS,
        payload:data
    })
    

} catch (error) {
    console.log(error)
}
}
const createPost=(post)=>async(dispatch)=>{
    try {
        const {data}=await api.createPost(post);
        dispatch({
            type:actionTypes.ADD_POST,
            payload:data
        })
    } catch (error) {
        console.log(error);
    }
}
const updatePost=(id,post)=>async(dispatch)=>{
    try {
        const {data}=await api.updatePost(id,post);//api request to update the post
        dispatch({
            type:actionTypes.UPDATE_POST,
            payload:data
        })
    } catch (error) {
        console.log(error.message);
    }
}
const deletePost=(id)=>async (dispatch)=>{
    try {
        await api.deletePost(id);
        dispatch({
            type:actionTypes.DELETE_POST,
            payload:id
        })
    } catch (error) {
        console.log(error.message);
    }
}
const likePost=(id)=>async (dispatch)=>{
    try {
        const {data}=await api.likePost(id);
        dispatch({
            type:actionTypes.LIKE_POST,
            payload:data
        })
    } catch (error) {
        
    }
}
export {getPosts,createPost,updatePost,deletePost,likePost};
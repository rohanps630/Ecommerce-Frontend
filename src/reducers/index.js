import * as redux from 'redux'
import posts from './posts'
import authReducer from './auth'

export default redux.combineReducers({
    posts,authReducer//since key and values are same
})
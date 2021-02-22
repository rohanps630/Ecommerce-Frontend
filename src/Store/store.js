import * as redux from "redux"
import thunk from 'redux-thunk'
import reducers from "../reducers";

export const store=redux.createStore(reducers,redux.compose(redux.applyMiddleware(thunk)));
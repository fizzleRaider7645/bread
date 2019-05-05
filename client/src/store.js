import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import accountReducer from './reducers/Account'
import userReducer from './reducers/User'
import loginReducer from './reducers/App'
const reducers = combineReducers({
    account: accountReducer,
    user: userReducer,
    login: loginReducer
});


const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);
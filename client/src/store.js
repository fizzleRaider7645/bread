import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/User'
const reducers = combineReducers({
  user: userReducer
});


const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);
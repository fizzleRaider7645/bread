import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import accountReducer from './reducers/AccountReducer'
// import transactionReducer from './reducers/TransactionReducer'
const reducers = combineReducers({
  user: accountReducer,
  // transactions: transactionReducer
});


const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);
import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'

const userReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_USER_SUCCESS':
        return action.user;

        default:
        return state;
    }
}

const reducers = combineReducers({
    user: userReducer
});

const middleware = [thunk]
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default createStore(
    reducers,
   applyMiddleware(...middleware)
);
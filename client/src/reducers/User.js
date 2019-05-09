import * as types from '../actions/ActionTypes'

export default (state = [], action) => {
    switch(action.type) {
        case types.GET_USER:
        return action.payload;
        case types.USER_LOGOUT:
        return {};
        default:
            return state;
    }
}
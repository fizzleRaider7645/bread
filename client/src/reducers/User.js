import * as types from '../actions/ActionTypes'
const initial = { account: { balance: 0 }, transactions: [] }
export default (state = initial, action) => {
    switch(action.type) {
        case types.GET_USER:
        return action.payload;
        case types.UPDATE_BALANCE:
        return {...state, account: { balance: action.payload } }
        case types.USER_LOGOUT:
        return {};
        default:
            return state;
    }
}
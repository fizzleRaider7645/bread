export default (state = {login: false}, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
        return { ...state, login: true, userInfo: action.payload }

        default:
            return state;
    }
}
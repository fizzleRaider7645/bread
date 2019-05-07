export default (state = {login: false}, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
        return { ...state, login: true, userInfo: action.payload }
        case 'REGISTER_SUCCESS':
        return { ...state, login: true, userInfo: action.payload }
        // case 'RETURNED_USER':
        // return { ...state, login :true, cookie: action.payload }
        default:
            return state;
    }
}
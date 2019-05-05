export default (state = [], action) => {
    switch(action.type) {
        case 'GET_ACCOUNT':
        return action.payload;

        default:
            return state;
    }
}
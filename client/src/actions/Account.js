const ROOT = process.env.REACT_APP_API_URL


/* Action Creator - GET ACCOUNT */
const setAccount = payload => {
    return {
        type: 'GET_ACCOUNT',
        payload
    }
}

/* Async Action - GET ACCOUNT */
export const getAccount = () => {
    return dispatch => {
        return fetch(`${ROOT}/accounts/1`)
            .then(response => response.json())
            .then(account => dispatch(setAccount(account)))
            .catch(error => console.log(error));
    }
}
// const ROOT = process.env.REACT_APP_API_URL
import { API_URL } from './apiUrl'

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
        return fetch(`${API_URL}/accounts/1`)
            .then(response => response.json())
            .then(account => dispatch(setAccount(account)))
            .catch(error => console.log(error));
    }
}
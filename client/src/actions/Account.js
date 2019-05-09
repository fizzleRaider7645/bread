import { API_URL } from './ApiUrl'
import { GET_ACCOUNT } from './ActionTypes'

/* Action Creator - GET ACCOUNT */
const setAccount = payload => {
    return {
        type: GET_ACCOUNT,
        payload
    }
}

/* Async Action - GET ACCOUNT */
export const getAccount = () => {
    return dispatch => {
        return fetch(`${API_URL}/profile`)
            .then(response => response.json())
            .then(account => dispatch(setAccount(account)))
            .catch(error => console.log(error));
    }
}
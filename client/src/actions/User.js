import { API_URL } from './ApiUrl'
import Auth from '../modules/Auth'
import { GET_USER } from './ActionTypes'
import { USER_LOGOUT } from './ActionTypes'

/* Action Creator - GET USER */
const setUser = payload => {
    return {
        type: GET_USER,
        payload
    }
}

export const unsetUser = payload => {
    return dispatch => {
        dispatch({ type: USER_LOGOUT })
    }
}

/* Async Action - GET USER */
export const getUser = () => {
    return dispatch => {
        return fetch(`${ API_URL }/account`, {
            method: 'GET',
            headers: {
              token: Auth.getToken(),
              'Authorization': `Token ${Auth.getToken()}`
            }
        }).then(res => res.json()).then(user => dispatch(setUser(user)))
    }
}

export const createTransaction = (data) => {

    return (dispatch, getState) => {
        let currentBalance = getState().user.account.balance
        if(data.transactionType === "Deposit") {
            currentBalance += Number(data.transactionAmount)
        } else {
            currentBalance -= Number(data.transactionAmount)
        }
        console.log(typeof currentBalance)
        dispatch({
            type: "UPDATE_BALANCE",
            payload: currentBalance
        })
    }
}

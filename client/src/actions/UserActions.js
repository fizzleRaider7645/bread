import { API_URL } from './ApiUrl'
import Auth from '../modules/Auth'
import * as types from './ActionTypes'

/* Action Creator - CLEARS REDUX STORE AFTER LOGOUT */
export const unsetUser = payload => {
    return dispatch => {
        dispatch({ type: types.USER_LOGOUT })
    }
}

/* Action Creator - GET USER WHEN USER COMPONENT MOUNTS*/
const setUser = payload => {
    return {
        type: types.GET_USER,
        payload
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
        }).then(res => res.json()).then(user => {
            dispatch(setUser(user))
        })
    }
}



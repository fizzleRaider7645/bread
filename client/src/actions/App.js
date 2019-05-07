import fetch from 'isomorphic-fetch';
import { API_URL } from './apiUrl'
import * as types from './actionTypes'


const authRequest = () => {
    return {
      type: types.AUTHENTICATION_REQUEST
    }
}

const authSuccess = (user, token) => {
    return {
      type: types.AUTHENTICATION_SUCCESS,
      user: user,
      token: token
    }
  }

  const authFailure = (errors) => {
    return {
      type: types.AUTHENTICATION_FAILURE,
      errors: errors
    }
  }
  


/*******************************************************************************************************/

// export const login = (data) => {
//     return dispatch => {
//         return fetch(`${ROOT}/login`, {
//             method: 'POST', 
//             body: JSON.stringify(data), 
//             headers:{
//                 'Content-Type': 'application/json'
//             }
//         }).then(res => res.json()).then(response => { dispatch({type: 'LOGIN_SUCCESS', payload: response}) 
//             // document.cookie = "userLoggedin=true"

//         }).catch(error => alert('Enter Valid Email & Password'));
//     }
// }

// export const returnUser = (cookie) => {
//     return dispatch => {
//         if(cookie === 'true') {
//             dispatch({ type: 'RETURNED_USER', payload: cookie })
//         }
//     }
// }

// export const register = (data) => {
//     return dispatch => {
//         return fetch(`${ROOT}/signup`, {
//             method: 'POST', 
//             body: JSON.stringify(data), 
//             headers:{
//                 'Content-Type': 'application/json'
//             }
//         }).then(res => res.json()).then(response => dispatch({type: 'REGISTER_SUCCESS', payload: response})).catch(error => alert('Enter Valid Email & Password to Register'));
//     }
// }
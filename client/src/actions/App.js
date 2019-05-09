import fetch from 'isomorphic-fetch';
import { API_URL } from './apiUrl'
import * as types from './actionTypes'



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
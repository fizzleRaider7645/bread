const ROOT = process.env.REACT_APP_API_URL

export const login = (data) => {
    return dispatch => {
        return fetch(`${ROOT}/login`, {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(response => dispatch({type: 'LOGIN_SUCCESS', payload: response})).catch(error => alert('Enter Valid Email & Password'));
    }
}

export const register = (data) => {
    return dispatch => {
        return fetch(`${ROOT}/signup`, {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(response => dispatch({type: 'REGISTER_SUCCESS', payload: response})).catch(error => alert('Enter Valid Email & Password to Register'));
    }
}
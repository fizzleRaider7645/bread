const ROOT = process.env.REACT_APP_API_URL

export const login = (data) => {
    return dispatch => {
        return fetch(`${ROOT}/login`, {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(response => dispatch({type: 'LOGIN_SUCCESS', payload: response})).catch(error => console.error('Error:', error));
    }
}
const ROOT = process.env.REACT_APP_API_URL

/* Action Creator - GET USER */
const setUser = user => {
    return {
        type: 'GET_USER',
        user
    }
}

/* Async Action - GET USER */
export const getUser = () => {
    return dispatch => {
        return fetch(`${ROOT}/users/1`)
            .then(response => response.json())
            .then(user => dispatch(setUser(user)))
            .catch(error => console.log(error));
    }
}

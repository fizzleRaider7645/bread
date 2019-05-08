class Auth {
    static authenticateToken(token) {
        token === undefined ? alert('Invalid Login!') :
        sessionStorage.setItem('token', token);
    }

    static isUserAuthenticated() {
        // const token = sessionStorage.getItem('token')
        const token = this.getToken()
        return token !== null
    }

    static deauthenticateToken() {
        sessionStorage.removeItem('token');
    }

    static getToken() {
        return sessionStorage.getItem('token');
    }
}

export default Auth;
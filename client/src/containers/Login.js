import React, { Component } from 'react';
import '../App.css';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
      }

    render() {
        return (
            <div className="LoginContainter">
                <form className="LoginFrom">
                    <h3 className="LoginHeader">Login</h3>
                    <p><label htmlFor="LoginEmail">Email: </label>
                    <input name="LoginEmail"></input></p>
                    <p><label htmlFor="LoginPassword">Password: </label>
                    <input name="LoginPassword"></input></p>
                </form>
            </div>
        )
    }
}

export default Login
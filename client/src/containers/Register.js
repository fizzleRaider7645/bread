import React, { Component } from 'react';
import '../App.css';

class Register extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
      }

    render() {
        return (
            <div className="RegisterContainer">
             <form className="RegisterFrom">
                <h3 className="RegisterHeader">Register</h3>
                <p><label htmlFor="RegisterEmail">Email: </label>
                <input name="RegisterEmail"></input></p>
                <p><label htmlFor="RegisterPassword">Password: </label>
                <input name="RegisterPassword"></input></p>
            </form>
        </div>
        )
    }
}

export default Register
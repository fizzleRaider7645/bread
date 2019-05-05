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

    handleSubmit = event => {
        event.preventDefault()
    }

    handleChange = event => {
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        })
    }

    render() {
        return (
            <div className="RegisterContainter">
                <form onSubmit={this.handleSubmit} className="RegisterForm">
                    <h3 className="RegisterHeader">Register</h3>
                    <p><input onChange={this.handleChange} placeholder="Email" name="email" value={this.state.email}></input></p>
                    <p><input onChange={this.handleChange} placeholder="Password" name="password" value={this.state.password}></input></p>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Register
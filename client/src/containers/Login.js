import React, { Component } from 'react';
import '../App.css';
const ROOT = process.env.REACT_APP_API_URL

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
      }

    handleSubmit = event => {
        event.preventDefault()
        var url = `${ROOT}/login`;
        var data = this.state;

        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }

    handleChange = event => {
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        })
    }

    render() {
        return (
            <div className="LoginContainter">
                <form onSubmit={this.handleSubmit} className="LoginForm">
                    <h3 className="LoginHeader">Login</h3>
                    <p><input onChange={this.handleChange} placeholder="Email" name="email" value={this.state.email}></input></p>
                    <p><input onChange={this.handleChange} placeholder="Password" name="password" value={this.state.password}></input></p>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login
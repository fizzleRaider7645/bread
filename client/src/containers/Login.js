import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
// import { login } from '../actions/App'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
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
                <form onSubmit={(event) => this.props.handleLoginSubmit(event, this.state)} className="LoginForm">
                    <h3 className="LoginHeader">Login</h3>
                    <p><input onChange={this.handleChange} placeholder="Email" name="email" value={this.state.email}></input></p>
                    <p><input onChange={this.handleChange} placeholder="Password" name="password" value={this.state.password}></input></p>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, null)(Login)
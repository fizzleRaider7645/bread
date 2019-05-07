import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css';
// import { register } from '../actions/App'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
      }

    //   handleSubmit = event => {
    //     event.preventDefault()
    //     // this.props.register(this.state)
    // }

    handleChange = event => {
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        })
    }

    render() {
        return (
            <div className="RegisterContainter">
                <form onSubmit={(event) => this.props.handleRegistrationSubmit(event, this.state) } className="RegisterForm">
                    <h3 className="RegisterHeader">Register</h3>
                    <p><input onChange={this.handleChange} placeholder="Email" name="email" value={this.state.email}></input></p>
                    <p><input onChange={this.handleChange} placeholder="Password" name="password" value={this.state.password}></input></p>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

// export default connect(null, null)(Register)
export default Register
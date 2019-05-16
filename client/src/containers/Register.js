import React, { Component } from 'react';
import '../App.css';
import ContainedButton from '../material-ui/SubmitButton'
import LoginPasswordBox from '../material-ui/LoginPasswordBox'
import LoginTextBox from '../material-ui/LoginTextBox'

class Register extends Component {
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
            <div className="RegisterContainter">
                <form onSubmit={(event) => this.props.handleRegistrationSubmit(event, this.state) } className="RegisterForm">
                    <h3 className="RegisterHeader">Register</h3>
                    <LoginTextBox parentState={this.state} handleChange={this.handleChange}/><br />
                    <LoginPasswordBox parentState={this.state} handleChange={this.handleChange} /><br />
                    <p><ContainedButton class={"submit"}/></p>
                </form>
            </div>
        )
    }
}

export default Register
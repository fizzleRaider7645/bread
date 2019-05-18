import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import SubmitButton from '../material-ui/SubmitButton'
import LoginTextBox from '../material-ui/LoginTextBox'
import LoginPasswordBox from '../material-ui/LoginPasswordBox'

class Login extends Component {
    constructor(props) {
        super(props)
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
                    <LoginTextBox parentState={this.state} handleChange={this.handleChange}/><br />
                    <LoginPasswordBox parentState={this.state} handleChange={this.handleChange} /><br />
                    <p><SubmitButton class={"submit"}/></p>
                </form>
            </div>
        )
    }
}

export default connect(null, null)(Login)
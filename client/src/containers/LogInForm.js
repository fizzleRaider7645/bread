import React, { Component } from 'react';

class LogInForm extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <form>
                <p> Sign In: </p>
                <input type="text"></input>
            </form>
        )
    }
}

export default LogInForm
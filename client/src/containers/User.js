import React from 'react'
import { Component } from 'react'

class User extends Component {
    constructor() {
        super()
        this.state = {
            email: 'doug7645@aol.com'
        };
    }

    render() {
        return (
            <div>{this.state.email}</div>
        )
    }
}

export default User


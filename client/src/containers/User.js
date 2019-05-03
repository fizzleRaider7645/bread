import React from 'react'
import { Component } from 'react'

class User extends Component {
    constructor() {
        super()
        this.state = {
            user: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/users/1')
            .then(response => response.json())
            .then(user => this.setState( { user } ))
    }
    render() {
        const userEmail = this.state.user.email
        return (
            <div key={this.state.user.id} className="User">{userEmail}</div>
        )
    }
}

export default User


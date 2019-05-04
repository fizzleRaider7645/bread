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
        const { id, email } = this.state.user
        return (
            <div key={id} className="User">{email}</div>
        )
    }
}

export default User


import React, { Component } from 'react'
import UserDisplay from '../components/UserDisplay';
const ROOT = process.env.REACT_APP_API_URL

class User extends Component {
    constructor() {
        super()
        this.state = {
            user: []
        };
    }

    componentDidMount() {
        fetch(`${ROOT}/users/1`)
            .then(response => response.json())
            .then(user => this.setState( { user } ))
        }
    
    render() {
        const { id, email } = this.state.user
        return (
            <div><UserDisplay email={email} /></div>
        )
    }
}

export default User


import React, { Component } from 'react'
import UserDisplay from '../components/UserDisplay';
import { connect } from 'react-redux';
import { getUser } from '../actions/User';
import '../App.css';

const ROOT = process.env.REACT_APP_API_URL

class User extends Component {
    constructor() {
        super()
        this.state = {
            user: []
        };
    }

    componentDidMount() {
        this.props.getUser()
    }
    
    render() {
        const { id, email } = this.state.user
        return (
            <div><UserDisplay /></div>
        )
    }
}

const mapStatetoProps = (state) => {
    return ({
      email: state.email
    })
  }
  
  export default connect(mapStatetoProps, { getUser })(User)


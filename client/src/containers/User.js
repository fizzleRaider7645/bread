import React, { Component } from 'react'
// import UserDisplay from '../components/UserDisplay';
import { connect } from 'react-redux';
import { getUser } from '../actions/User';
import '../App.css';

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
        // const { id, email } = this.state.user
        return (
            <div>{this.state.user.email}</div>
        )
    }
}

const mapStatetoProps = (state) => {
    return ({
      user: state.user
    })
  }
  
  export default connect(mapStatetoProps, { getUser })(User)


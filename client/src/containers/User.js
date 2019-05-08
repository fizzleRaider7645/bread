import React, { Component } from 'react'
// import Balance from '../components/Balance'
import { connect } from 'react-redux';
// import Auth from '../modules/Auth'
// import { API_URL } from '../actions/ApiUrl'
import { getUser } from '../actions/User'
// import UserDisplay from '../components/UserDisplay';
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

    // componentDidMount() {
        // fetch(`${ API_URL }/account`, {
        //     method: 'GET',
        //     headers: {
        //       token: Auth.getToken(),
        //       'Authorization': `Token ${Auth.getToken()}`
        //     }
        // }).then(res => res.json()).then(res => this.setState( res ))
    // }
    
    render() {
        return (
            <div>User: {this.props.user.email} </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return ({
        user: state.user
    })
  }

export default connect(mapStatetoProps, { getUser })(User)
// export default User


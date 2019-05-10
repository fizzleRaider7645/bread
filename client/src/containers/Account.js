import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';
import { API_URL } from '../actions/ApiUrl';
import Auth from '../modules/Auth';
import '../App.css';

class Account extends Component {
    constructor() {
        super()
        this.state = {
          balance: []
        }
      }

    // logOut = (event) => {
    //   event.preventDefault();
    //   this.props.unsetUser()
    // }

    render() {
        return (
            <div className="Account">
            Account
              <User />
            </div>
        )
    }
}

export default Account
// export default connect(null, { unsetUser })(Account)
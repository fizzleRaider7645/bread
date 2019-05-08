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
          account: []
        }
      }

    componentDidMount() {
      
    }

    render() {
        return (
            <div className="Account">
            Account
            <User />
            </div>
        )
    }
}

// const mapStatetoProps = (state) => {
//   return ({
//     balance: state.account.balance
//   })
// }

// export default connect(mapStatetoProps, { getAccount })(Account)
export default Account
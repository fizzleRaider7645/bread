import React, { Component } from 'react';
// import Balance from '../components/Balance'
import { connect } from 'react-redux';
// import { getAccount } from '../actions/Account';
import User from './User'
import { API_URL } from '../actions/ApiUrl'
import '../App.css';
import Auth from '../modules/Auth';

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
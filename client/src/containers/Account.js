import React, { Component } from 'react';
// import Balance from '../components/Balance'
import { connect } from 'react-redux';
// import { getAccount } from '../actions/Account';
import { API_URL } from '../actions/ApiUrl'
import '../App.css';

class Account extends Component {
    constructor() {
        super()
        this.state = {
          account: []
        }
      }

    // componentDidMount() {
    //   fetch(`${ API_URL }/`)
    // }

    render() {
        return (
            <div className="Account">
            Account
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
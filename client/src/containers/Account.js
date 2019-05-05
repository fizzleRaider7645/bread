import React, { Component } from 'react';
// import Balance from '../components/Balance'
import { connect } from 'react-redux';
import { getAccount } from '../actions/Account';
import '../App.css';

class Account extends Component {
    constructor() {
        super()
        this.state = {
          account: []
        }
      }

    componentDidMount() {
      this.props.getAccount()
    }

    render() {
        return (
            <div className="Account">
            Account
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
  return ({
    balance: state.account.balance
  })
}

export default connect(mapStatetoProps, { getAccount })(Account)
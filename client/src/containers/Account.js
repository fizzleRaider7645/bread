import React, { Component } from 'react';
import Balance from '../components/Balance'
import '../App.css';


class Account extends Component {
    constructor() {
        super()
        this.state = {
          currentBalance: []
        }
      }
    render() {
        return (
            <div className="Account">
            Account
            <Balance currentBalance={this.state.currentBalance}/>
            </div>
        )
    }
}

export default Account;
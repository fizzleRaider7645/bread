import React, { Component } from 'react';
import {connect} from 'react-redux'

class Balance extends Component {
    constructor() {
        super();
    }
    render(){
        let accountBalance;
        if(this.props.user.account !== undefined) {
            accountBalance = this.props.user.account.balance
        }
        return (
            <div className="Balance">${parseFloat(accountBalance).toFixed(2)}</div>
        )
    }
}

const mapStatetoProps = (state) => {
    return ({
        user: state.user
    })
  }

export default connect(mapStatetoProps, null)(Balance)

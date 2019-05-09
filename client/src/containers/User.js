import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/User'
import Transaction from './TransactionDashboard'
import '../App.css';

class User extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         user: []
    //     };
    // }

    constructor() {
        super()
        this.state = {
            actuateTransaction: false
        }
    }

    componentDidMount() {
        this.props.getUser()
    }

    handleTransactionClick = (event) => {
        if(this.state.actuateTransaction){
            this.setState({ actuateTransaction: false })
        } else {
            this.setState({ actuateTransaction: true })
        }
    }
    
    render() {
        let transactionButton;
        let transactionDashboard;
        
        if (this.state.actuateTransaction) {
            transactionDashboard = <Transaction cancelTransaction={this.handleTransactionClick}/>
        } else {
            transactionButton = <button onClick={this.handleTransactionClick}>Initiate Transaction</button>
        }

        return (
            <div className="userContainer">
            User Email: {this.props.user.email} <br />
            {transactionDashboard} <br />
            {transactionButton}
            </div>
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


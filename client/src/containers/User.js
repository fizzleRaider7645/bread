import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/User'
import TransactionDashboard from './TransactionDashboard'
import Balance from '../components/Balance'
import { getTransactionHistory } from '../actions/User'
import '../App.css';

class User extends Component {
    constructor() {
        super()
        this.state = {
            actuateTransaction: false,
            transactions: []
        }
    }

    componentDidMount() {
        this.props.getUser();
    }

    handleTransactionClick = (event) => {
        if(this.state.actuateTransaction){
            this.setState({ actuateTransaction: false })
        } else {
            this.setState({ actuateTransaction: true })
        }
    }

    updateActuateTransaction = () => {
        this.setState({
            actuateTransaction: false
        })
    }
    
    render() {
        let transactionButton;
        let transactionDashboard;
        if (this.state.actuateTransaction) {
            transactionDashboard = <TransactionDashboard updateUserState={this.updateActuateTransaction} cancelTransaction={this.handleTransactionClick}/>
        } else {
            transactionButton = <button onClick={this.handleTransactionClick}>See Transaction Dashboard</button>
        }

        return (
            <div className="userContainer">
            User Email: {this.props.user.email}<br />
            <Balance />
            { transactionDashboard } <br />
            { transactionButton }<br />
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return ({
        user: state.user
    })
  }

export default connect(mapStatetoProps, { getUser, getTransactionHistory })(User)


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/UserActions'
import TransactionDashboard from './TransactionDashboard'
import { default as CurrentBalancePaper } from '../material-ui/Paper'
import TransactionDashboardButton from '../material-ui/SeeTransactionDashboardButton'
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

    /* updateActuateTransaction IS A CALL BACK PASSED TO TransactionForm THROUGH 
       TransactionDashboard. WHEN A TRANSACTION IS COMPLETED IN TransactionForm 
       THE CB IS CALLED RESETTING actuateTransaction TO FALSE, HIDING 
       THE TransactionDashboard
    */
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
            transactionButton = <TransactionDashboardButton handleTransactionClick={this.handleTransactionClick}/>
        }

        return (
            <div className="userContainer">
            <CurrentBalancePaper user={this.props.user} />
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

export default connect(mapStatetoProps, { getUser })(User)


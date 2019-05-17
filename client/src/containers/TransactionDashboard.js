import React, { Component } from 'react'
import { connect } from 'react'
import TransactionForm from './TransactionForm';
import { API_URL } from '../actions/ApiUrl'
import Auth from '../modules/Auth'
import TransactionTypeSelector from '../material-ui/TransactionTypeSelector'
import TransactionHistory  from '../components/TransactionHistory';

class TransactionDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transactionType: null,
            transactionHistory: []
        }
    }


    handleClick = (event) => {
        this.setState({
            transactionType: event.target.value
        })
    }

    handleTransactionHistoryClick = () => {
        fetch(`${ API_URL }/transactions`, {
            method: 'GET',
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`
            }
        }).then(res => res.json()).then(transactions => this.setState({transactionHistory: transactions}))
    }
    
    render() {
        let transactionForm;
        let seeTransactionHistoryButton;
        let depositButton;
        let withdrawalButton;
        let selectTransactionTypelabel;
        let transactionHistory;

        if(this.state.transactionType === null) {
            selectTransactionTypelabel = <label>Select Type of Transaction: </label>
            depositButton = <button onClick={this.handleClick} name="Deposit">Deposit</button>
            withdrawalButton = <button onClick={this.handleClick} name="Withdrawal">Withdrawal</button>
        } else {
            selectTransactionTypelabel = <label>{this.state.transactionType}</label>
            transactionForm = <TransactionForm key={this.state.transactionType} updateUserState={this.props.updateUserState} transactionType={this.state.transactionType}/>
        }

        if(this.state.transactionHistory.length !== 0) {
            transactionHistory = <TransactionHistory transactions={this.state.transactionHistory} />
        } else {
            seeTransactionHistoryButton = <button onClick={this.handleTransactionHistoryClick}>See Transaction History</button>
        }

        return (
            <div>
                <br />
                {/* {selectTransactionTypelabel}<br />
                {depositButton}<br />
                {withdrawalButton}<br /> */}
                <TransactionTypeSelector handleClick={this.handleClick}/>
                {transactionForm}<br />
                {transactionHistory}<br />
                {seeTransactionHistoryButton}<br /> 
                <button onClick={this.props.cancelTransaction}>Exit Transaction Dashboard</button>
            </div>
        )
    }
}

export default TransactionDashboard
// export default connect(null, getTransactionHistory)(TransactionDashboard)
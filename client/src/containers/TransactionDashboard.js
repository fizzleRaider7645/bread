import React, { Component } from 'react'
import TransactionForm from './TransactionForm';

class Transaction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transactionType: null
        }
    }

    handleClick = (event) => {
        this.setState({
            transactionType: event.target.name
        })
    }
    
    render() {
        let transactionForm;
        let depositButton;
        let withdrawalButton;
        let selectTransactionTypelabel;
        if(this.state.transactionType === null) {
            selectTransactionTypelabel = <label>Select Type of Transaction: </label>
            depositButton = <button onClick={this.handleClick} name="Deposit">Deposit</button>
            withdrawalButton = <button onClick={this.handleClick} name="Withdrawal">Withdrawal</button>
        } else {
            selectTransactionTypelabel = <label>{this.state.transactionType}</label>
            transactionForm = <TransactionForm updateUserState={this.props.updateUserState} transactionType={this.state.transactionType}/>
        }
        return (
            <div>
                <br />
                {selectTransactionTypelabel}<br />
                {depositButton}<br />
                {withdrawalButton}<br />
                {transactionForm}<br />
                <button onClick={this.props.cancelTransaction}>Cancel Transaction</button>
            </div>
        )
    }
}

export default Transaction
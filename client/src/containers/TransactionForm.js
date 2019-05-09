import React, { Component } from 'react'
// import { actuateTransaction } from '../actions/Transaction'
import TransactionFormAmountDisplay from '../components/TransactionFormAmountDisplay'

class TransactionForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transactionAmount: 0,
            transactionType: this.props.transactionType
        }
    }

    actuateDeposit = () => {
        alert('deposit')
    }

    actuateWithdrawal = () => {
        alert('withdrawal')
    }

    handleChange = (event) => {
        this.setState({
            transactionAmount: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.state.transactionType === "Deposit") {
            this.actuateDeposit()
        } else if(this.state.transactionType === "Withdrawal") {
            this.actuateWithdrawal()
        }
    }
    
    render() {
        let amount = <TransactionFormAmountDisplay amount={this.state.transactionAmount} />;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>{this.props.type}</label><br />
                <p><label>{amount}</label></p>
                <input onChange={this.handleChange} type="text" value={this.state.transactionAmount} placeholder="0.00" step="0.01" min="0" max="10000"></input> <br />
                <button>Submit</button>
            </form>
        )
    }
}

export default TransactionForm
import React, { Component } from 'react'
import { API_URL } from '../actions/ApiUrl'
import Auth from '../modules/Auth'

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
    actuateDeposit = (state) => {
        fetch(`${ API_URL }/transactions`, {
            method: 'POST',
            body: JSON.stringify({
              transaction: state
            }),
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${ Auth.getToken() }`,
                'Content-Type': 'application/json'
            }
        }).then( res => {
            console.log(res)
        }).catch(err => console.log(err))
    }

    actuateWithdrawal = (state) => {
        alert('withdrawal')
    }

    handleChange = (event) => {
        this.setState({
            transactionAmount: event.target.value
        })
    }

    handleSubmit = (event, state) => {
        event.preventDefault()
        if(this.state.transactionType === "Deposit") {
            this.actuateDeposit(state)
        } else if(this.state.transactionType === "Withdrawal") {
            this.actuateWithdrawal(state)
        }
    }
    
    render() {
        let amount = <TransactionFormAmountDisplay amount={this.state.transactionAmount} />;
        return (
            <form onSubmit={ (event) => this.handleSubmit(event, this.state)}>
                <label>{this.props.type}</label><br />
                <p><label>{amount}</label></p>
                <input onChange={this.handleChange} type="text" value={this.state.transactionAmount} placeholder="0" step="0.01" min="0" max="10000"></input><br />
                <button>Submit</button>
            </form>
        )
    }
}

export default TransactionForm
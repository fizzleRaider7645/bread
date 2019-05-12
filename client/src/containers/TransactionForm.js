import React, { Component } from 'react'
import { API_URL } from '../actions/ApiUrl'
import Auth from '../modules/Auth'
import { connect } from 'react-redux'
import { createTransaction } from '../actions/User'
import TransactionFormAmountDisplay from '../components/TransactionFormAmountDisplay'

class TransactionForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transactionAmount: 0,
            transactionType: this.props.transactionType,
            transactionComplete: false
        }
    }
    actuateTransaction = (state) => {
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

    handleChange = (event) => {
        this.setState({
            transactionAmount: event.target.value
        })
    }

    handleSubmit = (event, state) => {
        event.preventDefault()
        this.props.createTransaction(state)
        this.actuateTransaction(state)
        this.setState({
            transactionComplete: true
        })
        this.props.updateUserState()
    }
    
    render() {
        let amount = <TransactionFormAmountDisplay amount={this.state.transactionAmount} />;
        return (
            <form onSubmit={ (event) => this.handleSubmit(event, this.state)}>
                <label>{this.props.type}</label><br />
                <p><label>{this.state.transactionType} Amount: {amount}</label></p>
                <input onChange={this.handleChange} type="number" value={this.state.transactionAmount} step="0.01" ></input><br />
                <label>Notes: </label><br />
                <textarea></textarea><br />
                <button>Submit</button>
            </form>
        )
    }
}

export default connect(null, { createTransaction })(TransactionForm)
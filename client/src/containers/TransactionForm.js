import React, { Component } from 'react'
import { API_URL } from '../actions/ApiUrl'
import Auth from '../modules/Auth'
import { connect } from 'react-redux'
import { createTransaction } from '../actions/User'
import TransactionFormAmountDisplay from '../components/TransactionFormAmountDisplay'
import OutlinedTextField from '../material-ui/TextInput'
import ContainedButton from '../material-ui/SubmitButton'
import NumericalInput from '../material-ui/NumericalInput'

class TransactionForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transactionAmount: 0,
            transactionType: this.props.transactionType,
            transactionNotes: "",
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
            if(res.status === 400) {
                alert('Invalid: Must Enter an Amount to Complete Transaction')
            }
        }).catch(err => console.log(err))
    }

    handleInputChange = (event) => {
        this.setState({
            transactionAmount: event.target.value
        })
    }

    handleNotesChange = (event) => {
        this.setState({
            transactionNotes: event.target.value
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
                <NumericalInput handleInputChange={this.handleInputChange}/><br />
                <OutlinedTextField handleNotesChange={this.handleNotesChange}/><br />
                <ContainedButton class={"submit"}/>
            </form>
        )
    }
}

export default connect(null, { createTransaction })(TransactionForm)
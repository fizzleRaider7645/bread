import React, { Component } from 'react';
import { actuateTransaction } from '../actions/TransactionActions';
import { connect } from 'react-redux';
import { updateBalance } from '../actions/TransactionActions';
import TransactionFormAmountDisplay from '../components/TransactionFormAmountDisplay';
import OutlinedTextField from '../material-ui/TextInput';
import ContainedButton from '../material-ui/SubmitButton';
import NumericalInput from '../material-ui/NumericalInput';

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
        this.props.updateBalance(state) /* UPDATES BALANCE IN REDUX STORE */
        this.props.actuateTransaction(state) /* CREATES NEW TRANSACTION IN RAILS & ADDS NEW TRANSACTION TO REDUX STORE*/
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

export default connect(null, { updateBalance, actuateTransaction })(TransactionForm)
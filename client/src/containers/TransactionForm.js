import React, { Component } from 'react'

class TransactionForm extends Component {
    constructor(props) {
        super()
        this.state = {
            amount: 0.00
        }
    }

    handleChange = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>{this.props.type}</label><br />
                <p><label>Amount: {this.state.amount}</label></p>
                <input onChange={this.handleChange} value={this.state.amount} type="text"></input><br />
                <button>Submit</button>
            </form>
        )
    }
}

export default TransactionForm
import React, { Component } from 'react'

class Transaction extends Component {
    constructor(props) {
        super()
        this.state = {
            transactionType: null
        }
    }
    
    render() {
        return (
            <div>
                Transaction <br />

                <button onClick={this.props.cancelTransaction}>Cancel Transaction</button>
            </div>
        )
    }
}

export default Transaction
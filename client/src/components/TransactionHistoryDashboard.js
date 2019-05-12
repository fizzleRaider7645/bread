import React, { Component } from 'react'

import { connect } from 'react-redux'

export class TransactionHistoryDashboard extends Component {



  render() {
    //   console.log(this.props.transactions)
      const transactions = this.props.transactions
    return (
      <div>
        {transactions && transactions.map(transaction => <div key={transaction.id}>{transaction.transaction_type} - ${transaction.amount}</div>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    transactions: state.user.transactions
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, null)(TransactionHistoryDashboard)

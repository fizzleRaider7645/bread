import React from 'react'
import TransactionDisplay from './TransactionDisplay'

const TransactionHistoryDashboard = props => {
      const transactions = props.transactions.map( transaction => <ul key={transaction.id}><TransactionDisplay transaction={transaction}/></ul>)
    return (
    <div className="TransactionHistoryDashboard">
    {transactions}
    </div>
  )
}
export default TransactionHistoryDashboard

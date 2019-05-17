import React from 'react'
import TransactionDisplay from './TransactionDisplay'

const TransactionHistory = props => {
    const transactions = props.transactions.map( transaction => <p key={transaction.id}><TransactionDisplay transaction={transaction}/></p>)
    return (
    <div className="TransactionHistory">
    {transactions}
    </div>
  )
}
export default TransactionHistory

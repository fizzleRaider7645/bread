import React from 'react'


const TransactionHistoryDashboard = (props) => {
      const transactions = props.transactions.map( transaction => <p key={transaction.id}>{transaction.transaction_type} - ${transaction.amount}</p>)
    return (
    <>
    {transactions}
    </>
  )
}
export default TransactionHistoryDashboard

import React from 'react'
import DateDisplay from './DateDisplay'

const TransactionDisplay = props => {
    return (
    <React.Fragment>
      <DateDisplay date={props.transaction.created_at}/> - {props.transaction.transaction_type}: ${props.transaction.amount}
    </React.Fragment>
  )
}
export default TransactionDisplay
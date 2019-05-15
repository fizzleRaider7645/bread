import React from 'react'
import DateDisplay from './DateDisplay'

const TransactionDisplay = props => {
    // console.log(props)
    return (
    <li><DateDisplay date={props.transaction.created_at}/> - {props.transaction.transaction_type}: ${props.transaction.amount}</li>
  )
}
export default TransactionDisplay
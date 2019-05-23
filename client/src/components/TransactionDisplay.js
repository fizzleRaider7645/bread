import React from 'react'
import DateDisplay from './DateDisplay'

const TransactionDisplay = props => {
  console.log(props)
  let amount;
  let type;
  let notes;
  
  if(props.transaction.amount) {
    amount = props.transaction.amount
    type = props.transaction.transaction_type
    notes = props.transaction.notes
  } else {
    amount = props.transaction.transactionAmount
    type = props.transaction.transactionType
    notes = props.transaction.transactionNotes
  }
    return (
    <React.Fragment>
      <DateDisplay date={props.transaction.created_at}/> - {type}: ${amount}<br />
      Notes: {notes}
    </React.Fragment>
  )
}
export default TransactionDisplay
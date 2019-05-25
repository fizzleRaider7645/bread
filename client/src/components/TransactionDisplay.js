import React from 'react'
import DateDisplay from './DateDisplay'

const TransactionDisplay = props => {
    return (
    <React.Fragment>
      <DateDisplay date={props.transaction.created_at}/> - {props.transaction.type}: ${props.transaction.amount}<br />
      Notes: {props.transaction.notes}
    </React.Fragment>
  )
}
export default TransactionDisplay
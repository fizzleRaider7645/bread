import React from 'react';

const TransactionFormAmountDisplay = props => {
    let amount;
    if(props.amount === "") {
        amount = "0.00"
    } else {
        amount = parseFloat(props.amount).toFixed(2)
    }
    return (
        <>{amount}</>
    )
}

export default TransactionFormAmountDisplay
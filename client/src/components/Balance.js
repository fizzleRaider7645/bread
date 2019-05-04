import React from 'react';
import { connect } from 'react-redux';

const Balance = props => {
    return (
        <div className="Balance">{props.balance}</div>
    )
}

export default Balance
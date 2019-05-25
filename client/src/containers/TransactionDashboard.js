import React, { Component } from 'react'
import TransactionForm from './TransactionForm';
import { connect } from 'react-redux'
import TransactionTypeSelector from '../material-ui/TransactionTypeSelector'
import TransactionHistory  from '../components/TransactionHistory';
import ClearHistoryButton from '../material-ui/ClearHistoryButton'
import ExitDashboardButton from '../material-ui/ExitDashboardButton'
import SeeTransactionHistoryButton from '../material-ui/SeeTransactionHistoryButton'
import Chart from './Chart'

class TransactionDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transactionType: null,
            transactionHistory: []
        }
    }


    handleClick = (event) => {
        this.setState({
            transactionType: event.target.value
        })
    }

    handleTransactionHistoryClick = () => {
        this.setState({
            transactionHistory: this.props.transactionHistory
        })
    }

    closeHistoryButtonClick = () => {
        this.setState({
            transactionHistory: []
        })
    }
    
    render() {
        let transactionForm;
        let seeTransactionHistoryButton;
        let clearTransactionHistoryButton;
        let chart;
        let transactionHistory;

        if(this.state.transactionType === null ||  this.state.transactionType === "") {
        } else {
            transactionForm = <TransactionForm key={this.state.transactionType} updateUserState={this.props.updateUserState} transactionType={this.state.transactionType}/>
        }

        if(this.state.transactionHistory.length !== 0) {
            transactionHistory = <TransactionHistory transactions={this.state.transactionHistory} />
            clearTransactionHistoryButton = <ClearHistoryButton closeHistoryButtonClick={this.closeHistoryButtonClick}/>
            chart = <Chart transactionHistory={this.state.transactionHistory}/>
        } else {
            seeTransactionHistoryButton = <SeeTransactionHistoryButton handleTransactionHistoryClick={this.handleTransactionHistoryClick}/>
        }

        return (
            <div>
                {chart}<br />
                <TransactionTypeSelector handleClick={this.handleClick}/>
                {transactionForm}<br />
                {transactionHistory}<br />
                {clearTransactionHistoryButton}<br />
                {seeTransactionHistoryButton}<br /> 
                <ExitDashboardButton cancelTransaction={this.props.cancelTransaction}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {transactionHistory: state.user.transactions}
}

export default connect(mapStateToProps, null)(TransactionDashboard)
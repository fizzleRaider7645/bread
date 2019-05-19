import React, { Component } from 'react'
import TransactionForm from './TransactionForm';
import { API_URL } from '../actions/ApiUrl'
import Auth from '../modules/Auth'
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
        fetch(`${ API_URL }/transactions`, {
            method: 'GET',
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`
            }
        }).then(res => res.json()).then(transactions => this.setState({transactionHistory: transactions}))
    }

    closeHistoryButtonClick = () => {
        this.setState({
            transactionHistory: []
        })
    }
    
    render() {
        let transactionForm;
        let seeTransactionHistoryButton;
        let depositButton;
        let clearTransactionHistoryButton;
        let withdrawalButton;
        let selectTransactionTypelabel;
        let chart;
        let transactionHistory;
        let chartData = this.state.transactionHistory

        if(this.state.transactionType === null ||  this.state.transactionType === "") {
        } else {
            selectTransactionTypelabel = <label>{this.state.transactionType}</label>
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
                {chart}
                <br />
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

export default TransactionDashboard
// export default connect(null, getTransactionHistory)(TransactionDashboard)
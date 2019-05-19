import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import { sortChartData } from './HelperFunctions/ChartData'

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactionHistory: this.props.transactionHistory,
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    label: 'Deposits',
                    borderColor: 'rgb(0, 0, 0)',
                    backgroundColor: 'rgb(102, 204, 0)',
                    fill: false,
                    hooverBackgroundColor: 'green',
                    data: sortChartData(props.transactionHistory).monthlyDeposits
                },{
                    label: 'Withdrawals',
                    borderColor: 'rgb(0, 0, 0)',
                    backgroundColor: 'rgb(255, 0, 0)',
                    fill: false,
                    hooverBackgroundColor: 'red',
                    data: sortChartData(props.transactionHistory).monthlyWithdrawals
                }]
            }
        }
    }

    componentDidUpdate() {
        console.log('props updating', this.props)
    }

    render() {
        sortChartData(this.props.transactionHistory)
        return (
            <div className="chart" >
            <Bar
                data={this.state.chartData}
                width={100}
                height={50}
                options={{
                    title: {
                        display: true,
                        text: 'Account Balances',
                        fontSize: 15
                    },
                    legend: {
                        display: true
                    }
                }}
            />
            </div>
        )
    }
}

export default Chart
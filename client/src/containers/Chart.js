import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    label: 'Account Balance',
                    borderColor: 'rgb(255, 255, 153)',
                    fill: true,
                    pointBackgroundColor: 'rgb(255, 153, 51)',
                    pointHoverBorderColor: 'rgb(0, 255, 255)',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            }
        }
    }

    static defaultProps = {

    }

    render() {
        console.log(this.props.transactionHistory)
        return (
            <div className="chart" >
            <Line
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
                        display: false
                    }
                }}
            />
            </div>
        )
    }
}

export default Chart
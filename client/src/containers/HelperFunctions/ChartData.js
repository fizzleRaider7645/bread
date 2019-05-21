const transactionMonth = () => {
    return [0,0,0,0,0,0,0,0,0,0,0,0]
}


export const sortChartData = (transactions) => {
    let deposits = [];
    let monthlyWithdrawals = transactionMonth();
    let monthlyDeposits = transactionMonth();
    let withdrawals = [];
    if(transactions.length !== 0) {
        transactions.forEach(transaction => {
            if(transaction.transaction_type === "Deposit") {
                deposits.push(transaction)
            } else {
                withdrawals.push(transaction)
            }
        })
        deposits.forEach(deposit => {
            let month = new Date(deposit.created_at).getMonth()
            monthlyDeposits[month] += 1
        })

        withdrawals.forEach(withdrawal => {
            let month = new Date(withdrawal.created_at).getMonth()
            monthlyWithdrawals[month] += 1
        })
    }
    return {monthlyDeposits, monthlyWithdrawals}
}


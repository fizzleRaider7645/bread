/* 1. Have table data 
   2. Seperate withrawals and deposits
   3. create monthlyCount key month of the transaction, which be a key of an object 
   4. map object and return array of all transactions   
     {month: 0}
   */

const transactionMonth = () => {
    // return {'January': 0, 'February': 0, 'March': 0, 'April': 0, 'May': 0, 'June': 0, 'July': 0, 'August': 0, 'September': 0, 'October': 0, 'November': 0, 'December': 0}
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


import Auth from '../modules/Auth'
import { API_URL } from './ApiUrl'
import * as types from './ActionTypes'

/* TO CREATE A NEW TRANSACTION  - START */
export const actuateTransaction = (state) => {
    return dispatch => {
        fetch(`${ API_URL }/transactions`, {
            method: 'POST',
            body: JSON.stringify({
              transaction: state
            }),
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${ Auth.getToken() }`,
                'Content-Type': 'application/json'
            }
        }).then( res => {
            const matchDatabaseObj = {
                transaction_type: state.transactionType,
                amount: state.transactionAmount,
                notes: state.transactionNotes
            }
            dispatch({
                type:  types.ACTUATE_TRANSACTION, payload: {...matchDatabaseObj, id: Math.random(), created_at: new Date()}
            })
            if(res.status === 400) {
                alert('Invalid: Must Enter an Amount to Complete Transaction')
            }
        }).catch(err => console.log(err))

    }
}
/* TO CREATE A NEW TRANSACTION  - END */

/* TO UPDATE BALANCE FOLLOWING A TRANSACTION - START */
export const updateBalance = (data) => {

    return (dispatch, getState) => {
        let currentBalance = getState().user.account.balance
        if(data.transactionType === "Deposit") {
            currentBalance += Number(data.transactionAmount)
        } else {
            currentBalance -= Number(data.transactionAmount)
        }
        dispatch({
            type: types.UPDATE_BALANCE,
            payload: currentBalance
        })
    }
}

/* TO UPDATE BALANCE FOLLOWING A TRANSACTION - END */
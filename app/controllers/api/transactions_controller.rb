class Api::TransactionsController < ApplicationController
    def create
        prepare_and_actuate_transaction(transaction_params)
    end

    def index
        @transactions = current_user.account.transactions
        render json: @transactions
    end

    private

    def prepare_and_actuate_transaction(transaction_params)
        @transaction = Transaction.new(transaction_type: transaction_params[:transactionType], amount: transaction_params[:transactionAmount], notes: transaction_params[:transactionNotes])
        @transaction.user = current_user
        @transaction.account = current_user.account
        if @transaction.amount <= 0.0
            render json: { message: 'Must input an amount to complete transaction' }, status: 400
        else
            @transaction.save
            update_balance(@transaction, @transaction.account)
        end
    end

    def update_balance(transaction, account)
        if transaction.transaction_type == "Deposit"
            account.balance += transaction.amount
        else transaction.transaction_type == "Withdrawal"
            account.balance -= transaction.amount
        end
        account.save
    end

    def transaction_params
        params.require(:transaction).permit(:transactionAmount, :transactionType, :transactionNotes)
    end
end

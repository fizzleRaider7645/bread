class Api::TransactionsController < ApplicationController
    def create
        prepare_and_actuate_transaction(transaction_params)
    end

    private

    def prepare_and_actuate_transaction(transaction_params)
        @transaction = Transaction.new(transaction_type: transaction_params[:transactionType], amount: transaction_params[:transactionAmount])
        @transaction.user = current_user
        @transaction.account = current_user.account
        
        if @transaction.save
            update_balance(@transaction, @transaction.account)
        end
        binding.pry
    end

    def update_balance(transaction, account)
        if transaction.transaction_type == "Deposit"
            account.balance += transaction.amount
        else transaction.transaction_type == "Withdrawal"
            account.balance -= transaction.amount
        end
    end

    def transaction_params
        params.require(:transaction).permit(:transactionAmount, :transactionType)
    end
end

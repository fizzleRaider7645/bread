class Api::TransactionsController < ApplicationController
    def create
        a = transaction_params
        binding.pry
    end

    private

    def transaction_params
        params.require(:transaction).permit(:transactionAmount, :transactionType)
    end
end

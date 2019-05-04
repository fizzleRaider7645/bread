class Api::AccountsController < ApplicationController
    # before_action :set_account, only: [:show, :edit, :update, :destroy]

    def index
    end

    def create
        account = Account.new(user_params)
        if account.save
            render json: account
        else
            render json: { message: account.errors }, status: 400
        end
    end

    def show
        set_account
        render json: @account
    end

    def update
    end

    def destroy
        if @account.destroy
            render status: 204
        else
            render json: { message: 'Error'}, status: 400
        end
    end

    private

    def set_account
        @account = Account.find_by(id: params[:id])
    end

    def account_params
        params.require(:account).permit(:balance, :user_id)
    end
end
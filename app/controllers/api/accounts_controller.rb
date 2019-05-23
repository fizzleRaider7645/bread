class Api::AccountsController < ApplicationController
    # before_action :require_login, except: [:index, :show]
    before_action :require_login
    before_action :set_account, except: [:create, :index]
    
    def index
        @accounts = Account.all
        render json: { accounts: @accounts }
    end

    def create
        account = Account.new(account_params)
        if account.save
            render json: { account: account }
        else
            render json: { message: account.errors }, status: 400
        end
    end

    def show
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
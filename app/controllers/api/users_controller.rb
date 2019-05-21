class Api::UsersController < ApplicationController
    before_action :require_login, except: [:create]

    def create
        user = User.create(user_params)
        user.account = Account.new
        user.save
        render json: { token: user.auth_token }
    end

    def account
        user = User.find_by_auth_token!(request.headers[:token])
        render json: user
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end
end
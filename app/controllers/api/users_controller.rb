class Api::UsersController < ApplicationController
    before_action :require_login, except: [:create]

    def create
        user = User.create!(user_params)
        render json: { token: user.auth_token }
    end

    def profile
        user = User.find_by_auth_token!(request.headers[:token])
        account = user.account
        render json: { user: { id: user.id, email: user.email, account: account  } }
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end
end
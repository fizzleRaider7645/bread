class Api::UsersController < ApplicationController
    # before_action :set_user, only: [:show, :edit, :update, :destroy]
    # def index
    #     @users = User.all
    #     render json: @users
    # end

    # def create
    #     user = User.new(user_params)
    #     if user.save
    #         render json: user
    #     else
    #         render json: { message: user.errors.full_messages }, status: 400
    #     end
    # end

    # def show
    #     render json: @user
    # end

    # def update
    # end

    # def destroy
    #     if @user.destroy
    #         render status: 204
    #     else
    #         render json: { message: 'Error'}, status: 400
    #     end
    # end

    # private

    # def set_user
    #     @user = User.find_by(id: params[:id])
    # end

    # def user_params
    #     params.require(:user).permit(:email, :password, :password_confirmation)
    # end

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
        params.permit(:email, :password)
    end
end
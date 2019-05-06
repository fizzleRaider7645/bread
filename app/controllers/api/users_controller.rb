class Api::UsersController < ApplicationController
    # before_action :set_user, only: [:show, :edit, :update, :destroy]

    def index
        @users = User.all
        render json: @users
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: { message: user.errors.full_messages }, status: 400
        end
    end

    def show
        render json: @user
    end

    def update
    end

    def destroy
        if @user.destroy
            render status: 204
        else
            render json: { message: 'Error'}, status: 400
        end
    end

    private

    def set_user
        @user = User.find_by(id: params[:id])
    end

    def user_params
        params.permit(:email, :password)
    end
end
# require 'pry'

class Api::SessionsController < ApplicationController
    
    def login
        @user = User.find_by(email: params[:email])
        if @user.present? && @user.authenticate(params[:password])
            session[:user_id] = @user.id
            render json: @user
        else
            render JSON status: 400
        end
    end
end
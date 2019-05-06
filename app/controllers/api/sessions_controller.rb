class Api::SessionsController < ApplicationController
    # skip_before_action :authorized, only: [:login]
    
    def login
        auth_object = Authentication.new(user_login_params)
        if auth_object.authenticate
          render json: {
            user: auth_object, message: "Login successful!", token: auth_object.generate_token }, status: :ok
        else
          render json: {
            message: "Incorrect username/password combination"}, status: :unauthorized
        end
      end

    private

    def user_login_params
        params.permit(:email, :password)
    end
end
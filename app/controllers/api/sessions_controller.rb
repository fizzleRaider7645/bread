class Api::SessionsController < ApplicationController
    skip_before_action :require_login, only: [:create], raise: false

    def create
      user = User.validate_login(login_params)
      if user
        allow_token_to_be_used_only_once_for(user)
        send_token_for_valid_login_of(user)
      else
        render_unauthorized("Invalid Email or Password")
      end
    end

    def destroy
      logout
      head :ok
    end

    private

    def login_params
      params.require(:user).permit(:email, :password)
    end

    def allow_token_to_be_used_only_once_for(user)
      user.regenerate_auth_token
    end

    def send_token_for_valid_login_of(user)
      render json: { token: user.auth_token }
    end

    def logout
      current_user.invalidate_token
    end
end
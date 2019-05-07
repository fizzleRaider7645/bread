class Api::SessionsController < ApplicationController
    skip_before_action :require_login, only: [:create], raise: false

    # def login
    #   user = User.find_by(email: user_login_params[:email])
    #   if user.present? && user.authenticate(user_login_params[:password])
    #     render json: user
    #   else
    #     render json: {
    #         message: "Incorrect email/password combination"}, status: :unauthorized
    #   end
    # end

    # private

    # def user_login_params
    #     params.permit(:email, :password)
    # end
    def create
      if user = User.validate_login(params[:email], params[:password])
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
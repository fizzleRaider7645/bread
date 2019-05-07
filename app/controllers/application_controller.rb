class ApplicationController < ActionController::API
    include ActionController::HttpAuthentication::Token::ControllerMethods
    
    def require_login
        authenticate_token || render_unauthorized("Access Denied")
    end
  
    def current_user
        @current_user ||= authenticate_token
    end

    protected

    def render_unauthorized(message)
        errors = { errors: [detail: message] }
        render json: errors
    end

    private

    def authenticate_token
        authenticate_with_http_token do | token, options |
            user = User.find_by(auth_token: token)
        end
    end
end

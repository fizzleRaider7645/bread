class User < ApplicationRecord
    has_one :account
    has_many :transactions, through: :account
    validates_uniqueness_of :email
    has_secure_password
    has_secure_token :auth_token

    def invalidate_token
        self.update_columns(auth_token: nil)
    end

    def self.validate_login(login_params)
        user = User.find_by(email: login_params[:email])
        if user && user.authenticate(login_params[:password])
            user
        end
    end

    
end

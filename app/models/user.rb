class User < ApplicationRecord
    has_one :account
    has_one :account_history, through: :account
    has_secure_password
end

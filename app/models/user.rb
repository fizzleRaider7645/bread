class User < ApplicationRecord
    has_one :account
    has_many :transactions, through: :account
    has_secure_password
end

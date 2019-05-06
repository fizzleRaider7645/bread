class User < ApplicationRecord
    has_one :account
    has_many :transactions, through: :account
    validates_presence_of :email, :password_digest
    validates :email, uniqueness: true
    has_secure_password
end

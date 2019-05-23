class UserSerializer < ActiveModel::Serializer
  attributes :id, :email
  has_one :account
  has_many :transactions, through: :account
end

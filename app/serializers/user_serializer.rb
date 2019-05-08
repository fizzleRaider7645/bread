class UserSerializer < ActiveModel::Serializer
  attributes :id, :email
  has_one :account
end

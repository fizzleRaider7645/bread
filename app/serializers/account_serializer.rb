class AccountSerializer < ActiveModel::Serializer
  attributes :id, :balance
  has_many :transactions
end

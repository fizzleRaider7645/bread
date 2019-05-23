class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :transaction_type, :amount, :notes, :created_at
  belongs_to :user
  belongs_to :account
  
end

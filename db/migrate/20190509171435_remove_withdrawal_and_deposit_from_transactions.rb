class RemoveWithdrawalAndDepositFromTransactions < ActiveRecord::Migration[5.2]
  def change
    remove_column :transactions, :deposit, :float
    remove_column :transactions, :withdrawal, :float
  end
end

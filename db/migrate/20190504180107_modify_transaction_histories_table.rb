class ModifyTransactionHistoriesTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :transaction_histories, :account_id, :transaction_id
  end
end

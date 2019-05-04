class ModifyTransactionsTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :transactions, :account_history_id, :transaction_history_id
  end
end

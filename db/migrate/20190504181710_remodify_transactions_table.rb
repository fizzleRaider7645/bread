class RemodifyTransactionsTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :transactions, :transaction_history_id, :user_id
    add_column :transactions, :account_id, :integer
  end
end

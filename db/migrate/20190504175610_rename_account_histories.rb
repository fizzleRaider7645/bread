class RenameAccountHistories < ActiveRecord::Migration[5.2]
  def change
    rename_table :account_histories, :transaction_histories
  end
end

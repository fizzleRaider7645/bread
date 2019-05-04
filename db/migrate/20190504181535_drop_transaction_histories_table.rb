class DropTransactionHistoriesTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :transaction_histories
  end
end

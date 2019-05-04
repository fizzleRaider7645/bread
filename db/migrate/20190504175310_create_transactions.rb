class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :account_history_id
      t.float :deposit
      t.float :withdrawal
      t.timestamps
    end
  end
end

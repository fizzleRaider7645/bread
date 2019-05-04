class CreateTransfers < ActiveRecord::Migration[5.2]
  def change
    create_table :transfers do |t|
      t.integer :account_history_id
      t.float :deposit
      t.float :withdrawl
      t.timestamps
    end
  end
end

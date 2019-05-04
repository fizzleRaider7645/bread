class CreateAccountHistories < ActiveRecord::Migration[5.2]
  def change
    create_table :account_histories do |t|
      t.integer :account_id
      t.float :deposit
      t.float :withdrawl
      t.timestamps
    end
  end
end

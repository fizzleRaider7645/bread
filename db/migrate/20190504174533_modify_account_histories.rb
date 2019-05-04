class ModifyAccountHistories < ActiveRecord::Migration[5.2]
  def change
    remove_column :account_histories, :deposit, :float
    remove_column :account_histories, :withdrawl, :float
  end
end

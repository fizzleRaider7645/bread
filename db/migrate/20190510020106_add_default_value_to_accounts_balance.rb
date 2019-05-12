class AddDefaultValueToAccountsBalance < ActiveRecord::Migration[5.2]
  def change
    change_column :accounts, :balance, :float, default: 0
  end
end

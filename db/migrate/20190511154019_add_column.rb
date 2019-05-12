class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :for, :text
  end
end

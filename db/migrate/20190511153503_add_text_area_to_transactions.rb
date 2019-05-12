class AddTextAreaToTransactions < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :for, :text_area
  end
end

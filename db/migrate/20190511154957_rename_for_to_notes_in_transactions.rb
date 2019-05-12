class RenameForToNotesInTransactions < ActiveRecord::Migration[5.2]
  def change
    rename_column :transactions, :for, :notes
  end
end

class DropTransfers < ActiveRecord::Migration[5.2]
  def change
    drop_table :transfers
  end
end

class AddLeveltoRiddles < ActiveRecord::Migration[6.1]
  def change
    add_column :riddles, :level, :string
  end
end

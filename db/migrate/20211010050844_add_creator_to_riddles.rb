class AddCreatorToRiddles < ActiveRecord::Migration[6.1]
  def change
    add_column :riddles, :creator, :string
  end
end

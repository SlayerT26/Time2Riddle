class CreateRiddles < ActiveRecord::Migration[6.1]
  def change
    create_table :riddles do |t|
      t.string :question
      t.string :hint
      t.integer :timer
      t.string :answer

      t.timestamps
    end
  end
end

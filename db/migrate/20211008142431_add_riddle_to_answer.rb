class AddRiddleToAnswer < ActiveRecord::Migration[6.1]
  def change
    add_reference :answers, :riddle, null: false, foreign_key: true
  end
end

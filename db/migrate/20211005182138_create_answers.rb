class CreateAnswers < ActiveRecord::Migration[6.1]
  def change
    create_table :answers do |t|
      t.string :answer
      t.string :guess

      t.timestamps
    end
  end
end

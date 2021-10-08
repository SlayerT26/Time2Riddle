class Answer < ApplicationRecord
  belongs_to :riddle
  belongs_to :user
end

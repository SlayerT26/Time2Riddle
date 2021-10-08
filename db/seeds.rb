# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Answer.destroy_all
Riddle.destroy_all
User.destroy_all

@admin = User.create!(username: 'Theo', email: 'theo@email.com', password: '123456')
@riddle1 = Riddle.create!(question: 'What belongs to you, but others can use?', hint: "Everyone calls you it", timer: 3, answer: "Your name", user: @admin)

@answer1 = Answer.create!(guess: "Your name", riddle: @riddle1, user: @admin)

puts "#{User.count} users created"

puts "#{Riddle.count} riddle created"

puts "#{Answer.count} answer created"
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
@riddle1 = Riddle.create!(question: 'What belongs to you, but others can use?', hint: "Everyone calls you it", timer: 3, level: 1, answer: "Your name", creator: "Theo", user: @admin)
@riddle2 = Riddle.create!(question: 'If I drink, I die. If i eat, I am fine. What am I?', hint: "If I touch you, I hurt", timer: 1, level: 1, answer: "Fire", creator: "Theo", user: @admin)
@riddle3 = Riddle.create!(question: 'What goes up but never comes down', hint: "", timer: 2, answer: "Your age", level: 1,  creator: "Theo", user: @admin)


@answer1 = Answer.create!(guess: "Your name", riddle: @riddle1, user: @admin)

puts "#{User.count} users created"

puts "#{Riddle.count} riddle created"

puts "#{Answer.count} answer created"
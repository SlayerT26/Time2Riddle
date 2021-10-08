# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Riddle.destroy_all

@admin = User.create!(username: 'Theo', email: 'chickadee@email.com', password: '123456')
@riddle1 = Riddle.create!(question: 'What belongs to you, but others can use?', hint: "Everyone calls you it", timer: 3, answer: "Your name")

puts "#{User.count} users created"

puts "#{Riddle.count} riddle created"
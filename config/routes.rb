Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :riddles do 
    resources :answers, only: [:create, :index]
  end

  get '/userriddles', to: 'riddle#user_riddles'

end

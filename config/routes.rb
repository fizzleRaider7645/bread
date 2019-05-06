Rails.application.routes.draw do
  namespace :api do
    post '/signup' => 'users#create'
    post '/login' => 'sessions#login'
    resources :users
    resources :accounts
  end
end

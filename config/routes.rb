Rails.application.routes.draw do
  namespace :api do
    post '/login' => 'sessions#login'
    resources :users
    resources :accounts
  end
end

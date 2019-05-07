Rails.application.routes.draw do
  namespace :api do
    get '/profile' => 'users#profile'
    post '/signup' => 'users#create'
    post '/login' => 'sessions#create'
    delete '/logout' => 'sessions#destroy'
    resources :users, :accounts
  end
end

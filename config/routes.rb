Rails.application.routes.draw do
  namespace :api do
    get '/account' => 'users#account'
    post '/signup' => 'users#create'
    post '/login' => 'sessions#create'
    delete '/logout' => 'sessions#destroy'
    resources :users, :accounts, :transactions
  end
end

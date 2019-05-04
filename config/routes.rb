Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :accounts
  end
end

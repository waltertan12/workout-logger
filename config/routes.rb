Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :sessions, only: [:create, :destroy]
    resources :users
  end

  root 'static_pages#index'
end

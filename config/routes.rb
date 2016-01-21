Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :sessions, only: [:create, :destroy]
    resources :users, except: [:edit, :new]
  end

  root 'static_pages#index'
end

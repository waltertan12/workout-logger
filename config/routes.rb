Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :sessions, only: [:create, :destroy]
    resources :users, except: [:edit, :new]
  end

  get 'gains' => 'static_pages#gains'
  root 'static_pages#index'
end

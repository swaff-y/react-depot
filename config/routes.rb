Rails.application.routes.draw do
  resources :line_items
  resources :carts
  get 'homepage/index'
  resources :products

  root 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

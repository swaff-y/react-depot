Rails.application.routes.draw do
  resources :orders
  resources :line_items
  get 'line_item/:id' => 'line_items#create'
  resources :carts
  get 'carts/last' => 'carts#show'
  get 'carts/last/total' => 'carts#total'
  get 'carts/delete/:id' => 'carts#delete'
  get 'homepage/index'
  get 'product/:id' => 'products#show'
  resources :products

  root 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

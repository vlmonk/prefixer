Rails.application.routes.draw do
  root to: "title#index"

  get "search" => "title#search"

end

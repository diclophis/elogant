# bootstrap rails-5

First create a project directory then edit the `Gemfile` and add the following:

        # Gemfile from https://gist.github.com/ambethia/c0738ec12dfa714ccbfd
        source 'https://rubygems.org'
        ruby '2.2.2'
        gem 'rails', :github => 'rails/rails'
        gem 'arel', :github => 'rails/arel'

Then execute

        bundle install
        bundle exec rails new . --skip-gemfile --skip-turbolinks --skip-test --dev --force --database=sqlite3

# first controller

create `app/controllers/welcome_controller.rb`

        # main application entry point

        class WelcomeController < ApplicationController
          def index
            render plain: 'ok'
          end
        end

And create a new route in `config/routes.rb`

        # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

        Rails.application.routes.draw do

          # You can have the root of your site routed with "root"
          root 'welcome#index'
        end

# bootstrap rails-5

First create a project directory then edit the `Gemfile` and add the following:

        # Gemfile
        source 'https://rubygems.org'
        ruby '2.2.2'
        gem 'rails', :github => 'rails/rails'
        gem 'arel', :github => 'rails/arel'

Then execute

        bundle install
        bundle exec rails new . --dev --force --api

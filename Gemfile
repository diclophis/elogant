source 'https://rubygems.org'

ruby '2.2.3'

# web-application framework that includes everything needed to create database-backed web applications
gem 'rails', :github => 'rails/rails'

# a framework framework; that is, you can build your own ORM
gem 'arel', :github => 'rails/arel'

# easy to use React and JSX in your rails application
gem 'react-rails', '~> 1.6'

# The Elo rating system is a method for calculating the relative skill levels of players in two-player games
gem 'elo'

# implements the trueskill algorithm
gem 'trueskill', github: 'saulabs/trueskill', require: 'saulabs/trueskill'

# Generates javascript file that defines all Rails named routes as javascript helpers
gem 'js-routes'

# persistent execjs runtime used for execjs execution
gem 'alaska'

# provides form_for like form helper react-rails components
gem 'react-on-rails-form-for', :github => 'diclophis/react-on-rails-form-for', :branch => 'master', :require => 'react-on-rails/form-for'

group :production do
  # interface to the PostgreSQL RDBMS.
  gem 'pg'

  # enables serving assets in production and setting your logger to standard out
  gem 'rails_12factor'
end

group :development, :test do
  # a fixtures replacement with a straightforward definition syntax, support for multiple build strategies
  gem 'factory_girl_rails'

  # bindings for the SQLite3 embedded database
  gem 'sqlite3'
end

group :test do
  # Mocking and stubbing library with JMock/SchMock syntax
  gem 'mocha'

  # a testing framework for Rails
  gem 'rspec-rails'

  # for assigns(...) support in rspec-rails
  gem 'rails-controller-testing'

  # A library for generating fake data such as names, addresses, and phone numbers
  gem 'faker'
end

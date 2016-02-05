source 'https://rubygems.org'

ruby '2.2.3'

# web-application framework that includes everything needed to create database-backed web applications
gem 'rails', :github => 'rails/rails'

# a framework framework; that is, you can build your own ORM
gem 'arel', :github => 'rails/arel'

# bindings for the SQLite3 embedded database
gem 'sqlite3'

# easy to use React and JSX in your rails application
gem 'react-rails', '~> 1.5.0'

gem 'elo'
gem 'trueskill', github: 'saulabs/trueskill', require: 'saulabs/trueskill'

group :development, :test do
  # a fixtures replacement with a straightforward definition syntax, support for multiple build strategies
  gem 'factory_girl_rails'
end

group :test do
  # Mocking and stubbing library with JMock/SchMock syntax
  gem 'mocha'

  # a testing framework for Rails
  gem 'rspec-rails'

  # provides "time travel", "time freezing", and "time acceleration" capabilities
  gem 'timecop'

  # A library for generating fake data such as names, addresses, and phone numbers
  gem 'faker'
end

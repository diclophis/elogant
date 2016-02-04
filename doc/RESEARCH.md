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

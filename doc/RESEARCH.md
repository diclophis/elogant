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

# create first view using react+jsx

update `Gemfile` to add the latest `react-rails` gem

        # easy to use React and JSX in your rails application
        gem 'react-rails', '~> 1.5.0'

update `app/assets/javascripts/application.js` to include the JS `react` and `react_ujs` libraries, and our application specific `components`.
The `components.js` filename is an important convention to maintain to ensure best compatibility with the server-side rendering features of `react-rails`... more on that later

        // in app/assets/javascripts/application.js
        //= require react
        //= require react_ujs
        //= require components

update `WelcomeController` to render using a `react` based view component

        class WelcomeController < ApplicationController
          def index
            render component: 'Welcome', props: {}
          end
        end

create `components.js` and `welcome.js.jsx` following this directory structure

        app/assets/javascripts/
        ├── components
        │   └── welcome.js.jsx
        └── components.js

first create `components.js` with the following contents

        // all subsequent requires should go here to ensure proper server-side rendering
        //= require_tree ./components

Then create `components/welcome.js.jsx`

        // NOTE: the use of ES6, and inline JSX... the gem handles converting this to suppprted javascript automatically
        class Welcome extends React.Component {
          constructor(props) {
            super(props);
          }

          render() {
            return (
              <div>
                <h1>hello</h1>
              </div>
            );
          }
        }



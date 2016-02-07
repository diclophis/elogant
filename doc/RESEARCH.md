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

# create some models

First create a migration

        bundle exec rails generate migration create_games_players_ratings_teams

Then enter `create_table` statements

        # ...
        create_table "teams", force: true do |t|
          t.integer  "rank"
          t.integer  "result_id"
          t.datetime "created_at"
          t.datetime "updated_at"
        end
        # ...

Then migrate

        bundle exec rails db:migrate

Then add some models: 64b73e9a51979180501051c1b3c640c8c150d13b

# lets add a restful controller

in `config/routes/rb`

        resources :games do
          resources :results, only: [:create, :destroy, :new]
          resources :ratings, only: [:index]
        end

in `app/controllers/games_controller.rb`

        class GamesController < ApplicationController
          before_action :set_game, only: [:destroy, :edit, :show, :update]

          def new
            @game = Game.new min_number_of_players_per_team: 1,
                             rating_type: "trueskill",
                             min_number_of_teams: 2,
                             allow_ties: true
          end

          def create
            @game = Game.new(games_params)

            if @game.save
              redirect_to game_path(@game)
            else
              render :new
            end
          end
        end

        private

        def set_game
          @game = Game.find(params[:id])
        end

        def games_params
          params.require(:game).permit(:name,
                                      :rating_type,
                                      :min_number_of_teams,
                                      :max_number_of_teams,
                                      :min_number_of_players_per_team,
                                      :max_number_of_players_per_team,
                                      :allow_ties)
        end

in `spec/controllers/games_controller_spec.rb`

        require "spec_helper"

        describe GamesController do
          describe "new" do
            it "exposes a new game" do
              get :new

              assigns(:game).should_not be_nil
            end
          end
        end

also of interest is the `rake routes` command:

        $ bundle exec rake routes
                 Prefix Verb   URI Pattern                           Controller#Action
                   root GET    /                                     welcome#index
           game_results POST   /games/:game_id/results(.:format)     results#create
        new_game_result GET    /games/:game_id/results/new(.:format) results#new
            game_result DELETE /games/:game_id/results/:id(.:format) results#destroy
           game_ratings GET    /games/:game_id/ratings(.:format)     ratings#index
                  games GET    /games(.:format)                      games#index
                        POST   /games(.:format)                      games#create
               new_game GET    /games/new(.:format)                  games#new
              edit_game GET    /games/:id/edit(.:format)             games#edit
                   game GET    /games/:id(.:format)                  games#show
                        PATCH  /games/:id(.:format)                  games#update
                        PUT    /games/:id(.:format)                  games#update
                        DELETE /games/:id(.:format)                  games#destroy

now try to run a spec `bundle exec rspec` ...

        1) GamesController new exposes the game
           Failure/Error: get :show, id: game
           React::ServerRendering::PrerenderError:
             Encountered error "ReferenceError: Game is not defined" when prerendering Game with {"game":{"name":"Dolorem","ratings":[],"results":[]}}

We need to create `app/assets/javascripts/components/game.js.jsx`

        #NOTE: 04743da4c8a529a59ce68547ea5ea4a67d9bbafc

More details on rails model serialization gotchas: 791d0d77ea835392ea6acdda71e0708ca31f684f

More details on array comprehensions: 281727d16a3cab3e40eb7268b10e0352cfd30f53

# READMES

- https://github.com/thoughtbot/factory_girl/blob/master/GETTING_STARTED.md
- https://github.com/stympy/faker
- https://github.com/rspec/rspec-rails
- https://github.com/elovation/elovation

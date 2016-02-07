# root controller, main application entry point

class WelcomeController < ApplicationController
  def index
    @games = Game.all
    render component: 'Welcome', props: {:games => @games}, prerender: true
  end
end

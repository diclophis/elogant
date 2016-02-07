# root controller, main application entry point

class WelcomeController < ApplicationController
  def index
    @games = Game.all
    @players = Player.all
    render component: 'Welcome', props: {:games => @games, :players => @players}, prerender: true
  end
end

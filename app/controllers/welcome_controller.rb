# root controller, main application entry point

class WelcomeController < ApplicationController
  def index
    render plain: 'ok'
  end
end

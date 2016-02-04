# root controller, main application entry point

class WelcomeController < ApplicationController
  def index
    render component: 'Welcome', props: {}
  end
end

class ResultsController < ApplicationController
  before_action :set_game

  def create
    response = ResultService.create(@game, params[:result])

    if response.success?
      redirect_to root_path
    else
      @result = response.result
      render component: 'Result', props: {game: @game, result: @result, form_authenticity_token: form_authenticity_token}, prerender: true
    end
  end

  def destroy
    result = @game.results.find_by_id(params[:id])

    response = ResultService.destroy(result)

    redirect_to root_path
  end

  def new
    @result = Result.new
    (@game.max_number_of_teams || 20).times{|i| @result.teams.build rank: i}
    render component: 'Result', props: {game: @game, result: @result, form_authenticity_token: form_authenticity_token}, prerender: true
  end

  private

  def set_game
    @game = Game.find(params[:game_id])
  end
end

class PlayersController < ApplicationController
  before_action :set_player, only: [:edit, :destroy, :show, :update]

  def create
    @player = Player.new(player_params)

    if @player.save
      redirect_to root_path
    else
      render component: 'Player', props: {player: @player, form_authenticity_token: form_authenticity_token}, prerender: true
    end
  end

  def destroy
    @player.destroy if @player.results.empty?
    redirect_to root_path
  end

  def edit
    render component: 'Player', props: {player: @player, form_authenticity_token: form_authenticity_token}, prerender: true
  end

  def new
    @player = Player.new
    render component: 'Player', props: {player: @player, form_authenticity_token: form_authenticity_token}, prerender: true
  end

  def show
    render component: 'Player', props: {player: @player, form_authenticity_token: form_authenticity_token}, prerender: true
  end

  def update
    if @player.update_attributes(player_params)
      redirect_to player_path(@player)
    else
      render component: 'Player', props: {player: @player, form_authenticity_token: form_authenticity_token}, prerender: true
    end
  end

  private

  def set_player
    @player = Player.find(params[:id])
  end

  def player_params
    params.require(:player).permit(:name, :email)
  end
end

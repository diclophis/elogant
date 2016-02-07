class Result < ActiveRecord::Base
  has_many :teams
  
  belongs_to :game, touch: true

  validates :game, presence: true
  scope :most_recent_first, -> { order created_at: :desc }
  scope :for_game, -> (game) { where(game_id: game.id) }

  validate do |result|
    if result.winners.empty?
      result.errors.add(:teams, "must have a winner")
    end

    if result.players.size != players.uniq.size
      result.errors.add(:teams, "must have unique players")
    end

    if result.teams.size < result.game.min_number_of_teams
      result.errors.add(:teams, "must have at least #{result.game.min_number_of_teams} teams")
    end

    if result.game.max_number_of_teams && result.teams.size > result.game.max_number_of_teams
      result.errors.add(:teams, "must have at most #{result.game.max_number_of_teams} teams")
    end

    if result.teams.any?{|team| team.players.size < result.game.min_number_of_players_per_team}
      result.errors.add(:teams, "must have at least #{result.game.min_number_of_players_per_team} players per team")
    end

    if result.game.max_number_of_players_per_team && result.teams.any?{|team| team.players.size > result.game.max_number_of_players_per_team}
      result.errors.add(:teams, "must have at most #{result.game.max_number_of_players_per_team} players per team")
    end

    if !result.game.allow_ties && result.teams.map(&:rank).uniq.size != result.teams.size
      result.errors.add(:teams, "game does not allow ties")
    end
  end

  def players
    teams.map(&:players).flatten
  end

  def winners
    teams.select { |team| team.rank == Team::FIRST_PLACE_RANK }.map(&:players).flatten
  end

  def losers
    teams.select { |team| team.rank != Team::FIRST_PLACE_RANK }.map(&:players).flatten
  end

  def tie?
    teams.count == teams.winners.count
  end

=begin
  def as_json(options = {})
    {
      winner: winners.first.name,
      loser: losers.first.name,
      created_at: created_at.utc.to_s
    }
  end
=end

  def most_recent?
    teams.all? do |team|
      team.players.all? do |player|
        player.results.where(game_id: game.id).order("created_at DESC").first == self
      end
    end
  end

  def valid_teams
    teams
  end

  def valid_players
    Player.order("name ASC").all.map { |player| [player.name, player.id] }
  end

  def valid_relations
    ["defeats", "ties"]
  end

  def error_messages
    self.errors.full_messages
  end

  def error_mappings
    self.errors
  end

  def as_json(opts = {})
    super(:methods => [:valid_teams, :valid_relations, :valid_players, :valid_teams, :error_messages, :error_mappings])
  end
=begin
  <% @result.teams.each.with_index do |team, index| %>
    <%= select "result[teams][#{index}]", "players", player_options, {include_blank: ''}, class: "players", multiple: @game.max_number_of_players_per_team != 1, "data-placeholder" => "Team #{index + 1}" %>

    <% if index != @result.teams.size - 1 %>
      <% if @game.allow_ties %>
        <%= select "result[teams][#{index}]", :relation, ["defeats", "ties"], {} %>
      <% else %>
        <%= hidden_field_tag "result[teams][#{index}][relation]", :defeats, {} %>
        Defeats:
      <% end %>
    <% end %>
  <% end %>
=end
end

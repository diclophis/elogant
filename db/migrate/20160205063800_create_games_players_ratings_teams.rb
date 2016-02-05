class CreateGamesPlayersRatingsTeams < ActiveRecord::Migration[5.0]
  def change
    # https://raw.githubusercontent.com/elovation/elovation/master/db/schema.rb
    create_table "games", force: true do |t|
      t.string   "name",                           null: false
      t.datetime "created_at"
      t.datetime "updated_at"
      t.string   "rating_type"
      t.integer  "min_number_of_teams"
      t.integer  "max_number_of_teams"
      t.integer  "min_number_of_players_per_team"
      t.integer  "max_number_of_players_per_team"
      t.boolean  "allow_ties"
    end

    create_table "players", force: true do |t|
      t.string   "name",       null: false
      t.datetime "created_at"
      t.datetime "updated_at"
      t.string   "email"
    end

    create_table "players_teams", force: true do |t|
      t.integer "player_id"
      t.integer "team_id"
    end

    create_table "rating_history_events", force: true do |t|
      t.integer  "rating_id",           null: false
      t.integer  "value",               null: false
      t.datetime "created_at"
      t.datetime "updated_at"
      t.float    "trueskill_mean"
      t.float    "trueskill_deviation"
    end

    add_index "rating_history_events", ["rating_id"], name: "index_rating_history_events_on_rating_id", using: :btree

    create_table "ratings", force: true do |t|
      t.integer  "player_id",           null: false
      t.integer  "game_id",             null: false
      t.integer  "value",               null: false
      t.boolean  "pro",                 null: false
      t.datetime "created_at"
      t.datetime "updated_at"
      t.float    "trueskill_mean"
      t.float    "trueskill_deviation"
    end

    add_index "ratings", ["game_id"], name: "index_ratings_on_game_id", using: :btree
    add_index "ratings", ["player_id"], name: "index_ratings_on_player_id", using: :btree

    create_table "results", force: true do |t|
      t.integer  "game_id",    null: false
      t.datetime "created_at"
      t.datetime "updated_at"
    end

    add_index "results", ["game_id"], name: "index_results_on_game_id", using: :btree

    create_table "teams", force: true do |t|
      t.integer  "rank"
      t.integer  "result_id"
      t.datetime "created_at"
      t.datetime "updated_at"
    end
  end
end

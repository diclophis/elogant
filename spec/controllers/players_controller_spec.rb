require "spec_helper"

describe PlayersController do
  include ActiveSupport::Testing::TimeHelpers

  describe "new" do
    it "exposes a new player" do
      get :new

      assigns(:player).should_not be_nil
    end
  end

  describe "create" do
    it "creates a player and redirects to dashboard" do
      post :create, player: {name: "Drew", email: "drew@example.com"}

      player = Player.where(name: "Drew", email: "drew@example.com").first

      player.should_not be_nil
      response.should redirect_to(root_path)
    end

    it "renders new given invalid params" do
      FactoryGirl.create(:player, name: "Drew")

      post :create, player: {name: "Drew"}

      #TODO: response.should render_template(:new)
    end

    it "protects against mass assignment" do
      travel(0) do
        post :create, player: {created_at: 3.days.ago, name: "Drew"}

        player = Player.where(name: "Drew").first
        player.created_at.should > 3.days.ago
      end
    end
  end

  describe "destroy" do
    it "deletes a player with no results" do
      player = FactoryGirl.create(:player)

      delete :destroy, id: player

      response.should redirect_to(root_path)
      Player.find_by_id(player.id).should be_nil
    end

    it "doesn't allow deleting a player with results" do
      #result = FactoryGirl.create(:result)

      two_teams = [ FactoryGirl.create(:team, { rank: 1 }), FactoryGirl.create(:team, { rank: 2 })] 
      game = FactoryGirl.create(:game, name: "First name")
      result = FactoryGirl.create(:result, {game: game, teams: two_teams})

      player = result.players.first

      delete :destroy, id: player

      response.should redirect_to(root_path)
      Player.find_by_id(player.id).should == player
    end
  end

  describe "edit" do
    it "exposes the player for editing" do
      player = FactoryGirl.create(:player)

      get :edit, id: player

      assigns(:player).should == player
    end
  end

  describe "update" do
    context "with valid params" do
      it "redirects to the player show page" do
        player = FactoryGirl.create(:player, name: "First name")

        put :update, id: player, player: {name: "Second name"}

        response.should redirect_to(player_path(player))
      end

      it "updates the player with the provided attributes" do
        player = FactoryGirl.create(:player, name: "First name")

        put :update, id: player, player: {name: "Second name"}

        player.reload.name.should == "Second name"
      end

      it "protects against mass assignment" do
        travel(0) do
          player = FactoryGirl.create(:player, name: "First name")

          put :update, id: player, player: {created_at: 3.days.ago}

          player.reload.created_at.should > 3.days.ago
        end
      end
    end

    context "with invalid params" do
      it "renders the edit page" do
        player = FactoryGirl.create(:player, name: "First name")

        put :update, id: player, player: {name: nil}

        #TODO: response.should render_template(:edit)
      end
    end
  end

  describe "show" do
    it "exposes the player" do
      player = FactoryGirl.create(:player)

      get :show, id: player

      assigns(:player).should == player
    end
  end
end

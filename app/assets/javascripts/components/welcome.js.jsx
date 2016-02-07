// root view component

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var mappedPlayersFromRatings = function(ratings) {
      return ratings.map(function(rating, i) {
        return(
          <li key={i}>{rating.player.name}</li>
        );
      });
    };

    var mappedGames = this.props.games.map(function(game, i) {
      return (
        <div key={i}>
          Top <a href={Routes.game_path(game.id)}>{game.name}</a> players
          <ol>
            {mappedPlayersFromRatings(game.top_ratings)}
          </ol>
          <a href={Routes.new_game_result_path(game.id)}>create result from a {game.name} match</a>
        </div>
      );
    });

    var mappedPlayers = this.props.players.map(function(player, i) {
      return (
        <div key={i}>
          <a href={Routes.player_path(player.id)}>{player.name}</a>
        </div>
      );
    });

    return (
      <div>
        <div>
          <h1>
            games
          </h1>
          {mappedGames}
        </div>
        <div>
          <h1>players</h1>
          {mappedPlayers}
        </div>
        <div>
          <h1>admin</h1>
          <a href={Routes['new_player_path']()}>new player</a>
          <a href={Routes['new_game_path']()}>new game</a>
        </div>
      </div>
    );
  }
}

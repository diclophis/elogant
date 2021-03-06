// root view component

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var mappedPlayersFromRatings = function(game) {

      return game.top_ratings.map(function(rating, i) {
        return(
          <li key={i}>{rating.player.name} <em>{rating.player.wins_over_losses_per_game[game.id]}</em></li>
        );
      });
    };

    var mappedGames = this.props.games.map(function(game, i) {
      return (
        <li key={i}>
          <h2>Top <a href={Routes.game_path(game.id)}>{game.name}</a> players</h2>
          <ol>
            {mappedPlayersFromRatings(game)}
          </ol>
          <a href={Routes.new_game_result_path(game.id)}>create result from a {game.name} match</a>
        </li>
      );
    });

    var mappedPlayers = this.props.players.map(function(player, i) {
      return (
        <ul key={i}>
          <li>
            <a href={Routes.player_path(player.id)}>{player.name}</a>
          </li>
        </ul>
      );
    });

    return (
      <div>
        <div>
          <h1>
            game rankings
          </h1>
          <ul>
            {mappedGames}
          </ul>
        </div>
        <div>
          <h1>all players</h1>
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

// root view component

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var mappedGames = this.props.games.map(function(game, i) {
      return (
        <div>
          <h2 key={i}>
            <a href={Routes.game_path(game.id)}>{game.name}</a>
            {console.log(game.top_ratings)}
          </h2>
          <h3>
            <a href={Routes.new_game_result_path(game.id)}>new result</a>
          </h3>
        </div>
      );
    });

    var mappedPlayers = this.props.players.map(function(player, i) {
      return (
        <h2 key={i}>
          <a href={Routes.player_path(player.id)}>{player.name}</a>
        </h2>
      );
    });

    return (
      <div>
        <div>
          <a href={Routes['new_game_path']()}>new game</a>
          <h1>
            games
          </h1>
          {mappedGames}
        </div>
        <div>
          <a href={Routes['new_player_path']()}>new player</a>
          <h1>players</h1>
          {mappedPlayers}
        </div>
      </div>
    );
  }
}

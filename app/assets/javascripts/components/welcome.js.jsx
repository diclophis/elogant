// root view component

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var mappedGames = this.props.games.map(function(game, i) {
      return (
        <h2 key={i}>
          <a href={Routes.game_path(game.id)}>{game.name}</a>
          {console.log(game.top_ratings)}
        </h2>
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
          <h1>games</h1>
          {mappedGames}
          <a href={Routes['new_game_path']()}>new game</a>
        </div>
        <div>
          <h1>players</h1>
          {mappedPlayers}
          <a href={Routes['new_player_path']()}>new player</a>
        </div>
      </div>
    );
  }
}

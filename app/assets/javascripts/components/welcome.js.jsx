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
        </h2>
      );
    });
    return (
      <div>
        <h1>games</h1>
        {mappedGames}
        <a href={Routes['new_game_path']()}>new game</a>
      </div>
    );
  }
}

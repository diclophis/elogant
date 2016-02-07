// root view component

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var mappedGames = this.props.games.map(function(game, i) {
      return (
        <h2 key={i}><a href={"/games/" + game.id}>{game.name}</a></h2>
      );
    });
    return (
      <div>
        <h1>games</h1>
        {mappedGames}
      </div>
    );
  }
}


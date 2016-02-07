// game view component

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form action="/games" method="POST">
        <h1>game</h1>
        <div>
          {console.log(this.props.game)}
          <input type="hidden" name="authenticity_token" value={this.props.form_authenticity_token}/>
          <input name="game[name]" defaultValue={this.props.game.name} />
        </div>
      </form>
    );
  }
}


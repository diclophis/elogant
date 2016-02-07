// game view component

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var mappedErrorMessages = this.props.game.error_messages.map(function(error_message, i) {
      return (<li key={i}>{error_message}</li>);
    });

    return (
      <form action="/games" method="POST">
        <h1>game</h1>
        <div>
          <ul>
            {mappedErrorMessages}
          </ul>
          <input type="hidden" name="authenticity_token" value={this.props.form_authenticity_token}/>
          <input name="game[name]" defaultValue={this.props.game.name} />
        </div>
      </form>
    );
  }
}


// game view component

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var mappedErrorMessages = this.props.game.error_messages.map(function(error_message, i) {
      return (<li key={i}>{error_message}</li>);
    });

    var mappedRatingTypeOptions = this.props.game.valid_rating_types.map(function(rating_type, i) {
      return (<option key={i}>{rating_type}</option>);
    });

    var mappedAllowTiesOptions = this.props.game.valid_allow_ties.map(function(allow_ties, i) {
      return (<option key={i} value={allow_ties}>{allow_ties ? 'Allow Ties' : 'Do not allow ties'}</option>);
    });

    return (
      <form action="/games" method="POST">
        <h1>game</h1>
        <div>
          <ul>
            {mappedErrorMessages}
          </ul>
          <input type="hidden" name="authenticity_token" value={this.props.form_authenticity_token}/>
          <label>Name: </label>
          <input name="game[name]" defaultValue={this.props.game.name} />
          <select name="game[allow_ties]" defaultValue={this.props.game.allow_ties}>
            {mappedAllowTiesOptions}
          </select>
          <select name="game[rating_type]" defaultValue={this.props.game.rating_type}>
            {mappedRatingTypeOptions}
          </select>
          <input name="game[min_number_of_players_per_team]" defaultValue={this.props.game.min_number_of_players_per_team} />
          <input name="game[max_number_of_players_per_team]" defaultValue={this.props.game.max_number_of_players_per_team} />
          <input name="game[max_number_of_teams]" defaultValue={this.props.game.max_number_of_teams} />
          <input name="game[min_number_of_teams]" defaultValue={this.props.game.min_number_of_teams} />
          <input type="submit" />
        </div>
      </form>
    );
  }
}


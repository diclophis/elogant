// game view component

class Game extends React.Component {
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
      <FormWidget model={this.props.game} form_authenticity_token={this.props.form_authenticity_token} model_type="game" model_type_route="games">
        <h1>game</h1>
        <ul>
          {mappedErrorMessages}
        </ul>
        <p>
          <label>Name:</label>
          <input name="game[name]" defaultValue={this.props.game.name} />
        </p>
        <p>
          <select name="game[allow_ties]" defaultValue={this.props.game.allow_ties}>
            {mappedAllowTiesOptions}
          </select>
        </p>
        <p>
          <select name="game[rating_type]" defaultValue={this.props.game.rating_type}>
            {mappedRatingTypeOptions}
          </select>
        </p>
        <p>
          <label>Max Player Per Team:</label>
          <input name="game[max_number_of_players_per_team]" defaultValue={this.props.game.max_number_of_players_per_team} />
        </p>
        <p>
          <label>Min Player Per Team:</label>
          <input name="game[min_number_of_players_per_team]" defaultValue={this.props.game.min_number_of_players_per_team} />
        </p>
        <p>
          <label>Max Teams:</label>
          <input name="game[max_number_of_teams]" defaultValue={this.props.game.max_number_of_teams} />
        </p>
        <p>
          <label>Min Teams:</label>
          <input name="game[min_number_of_teams]" defaultValue={this.props.game.min_number_of_teams} />
        </p>
      </FormWidget>
    );
  }
}

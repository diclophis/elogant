//

class Result extends React.Component {
  render() {
    var mappedErrorMessages = this.props.result.error_messages.map(function(error_message, i) {
      return (<li key={i}>{error_message}</li>);
    }, this);

    var mappedPlayerOptions = this.props.result.valid_players.map(function(valid_player, i) {
      return (
        <option key={i} multiple={this.props.game.max_number_of_players_per_team != 1} value={valid_player[1]}>{valid_player[0]}</option>
      );
    }, this);

    var mappedRelationOptions = this.props.result.valid_relations.map(function(valid_relation, i) {
      return(
        <option key={i}>{valid_relation}</option>
      );
    }, this);

    var relationSelect = function(i, result_teams_size) {
      if (i != (result_teams_size - 1)) {
        return (
          <select key={i} name={"result[teams][" + i + "][relation]"}>
            {mappedRelationOptions}
          </select>
        );
      }
    };

    var mappedResultInputs = this.props.result.valid_teams.map(function(team, ti) {
      return(
        <div key={ti}>
          <select name={"result[teams][" + ti + "][players][]"}>
            {mappedPlayerOptions}
          </select>
          {relationSelect(ti, this.props.result.valid_teams.length)}
        </div>
      );
    }, this);

    return (
      <FormWidget model={this.props.result} form_authenticity_token={this.props.form_authenticity_token} route_args={(this.props.game && this.props.game.id && this.props.result && this.props.result.id == null) ? [this.props.game.id] : []} model_type="game_result" model_type_route="game_results">
        <h1>result</h1>
        <ul>
          {mappedErrorMessages}
        </ul>
        {mappedResultInputs}
      </FormWidget>
    );
  }
}

//

class Result extends React.Component {
  render() {
    var mappedErrorMessages = this.props.result.error_messages.map(function(error_message, i) {
      return (<li key={i}>{error_message}</li>);
    });

    return (
      <FormWidget model={this.props.result} form_authenticity_token={this.props.form_authenticity_token} route_args={(this.props.game && this.props.game.id && this.props.result && this.props.result.id == null) ? [this.props.game.id] : []} model_type="game_result" model_type_route="game_results">
        <h1>result</h1>
        <ul>
          {mappedErrorMessages}
        </ul>
        <input name="teams[a][players]" />
      </FormWidget>
    );
  }
}

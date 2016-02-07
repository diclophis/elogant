//

class Player extends React.Component {
  render() {
    var mappedErrorMessages = this.props.player.error_messages.map(function(error_message, i) {
      return (<li key={i}>{error_message}</li>);
    });

    return (
      <FormWidget model={this.props.player} form_authenticity_token={this.props.form_authenticity_token} model_type="player" model_type_route="players">
        <h1>player</h1>
        <ul>
          {mappedErrorMessages}
        </ul>
        <p>
          <label>Name:</label>
          <input name="player[name]" defaultValue={this.props.player.name} />
        </p>
        <p>
          <label>Email:</label>
          <input name="player[email]" defaultValue={this.props.player.email} />
        </p>
      </FormWidget>
    );
  }
}

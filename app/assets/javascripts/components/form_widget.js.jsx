//

class FormWidget extends React.Component {
  render() {
    return (
      <form action={this.props.model.id ? Routes[this.props.model_type + '_path'].apply(this, this.props.route_args || [this.props.model.id]) : Routes[this.props.model_type_route + '_path'].apply(this, this.props.route_args)} method="POST">
        <input type="hidden" name="_method" value={this.props.model.id ? 'PATCH' : 'POST'}/>
        <input type="hidden" name="authenticity_token" value={this.props.form_authenticity_token}/>
        <div>
          {this.props.children}
        </div>
        <div>
          <p>
            <input type="submit" />
            {(this.props.model.id) ? <input type="submit" name="_method" value="DELETE" /> : null}
            <a href={Routes.root_path()}>cancel</a>
          </p>
        </div>
      </form>
    );
  }
}

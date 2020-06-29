import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({text: ""});
    this.props.onSave(this.state.text);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Your notes" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" value="+" />
        </form>
      </div>
    );
  }
}

export default AddTodo
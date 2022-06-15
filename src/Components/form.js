import React from "react";
import axios from "axios";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(response.data);
    this.setState({userName: ''});
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}
export default Form;

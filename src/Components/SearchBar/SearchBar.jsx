import { Component } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { Header, Form, Input, Button } from "./SearchBar.styled.js";

class SearchBar extends Component {
  state = {
    query: "",
  };

  handleInputChange = (event) => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.query.trim() === "") {
      toast.error("Your query is empty. Please enter correct query.");
      return;
    }
    this.props.onFormSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">Search</Button>
          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </Form>
      </Header>
    );
  }
}
export default SearchBar;

SearchBar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

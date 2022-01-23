import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { Header, Form, Input, Button } from "./SearchBar.styled.js";

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.error("Your query is empty. Please enter correct query.");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">Search</Button>
        <Input
          type="text"
          autocomplete="off"
          autoFocus
          value={query}
          placeholder="Search images and photos"
          onChange={handleInputChange}
        />
      </Form>
    </Header>
  );
}
export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

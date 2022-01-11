import PropTypes from "prop-types";
import { Button } from "./Button.styled";

const LoadMoreButton = ({ onLoadMore }) => {
  return (
    <Button type="button" onClick={onLoadMore}>
      Load more
    </Button>
  );
};

export default LoadMoreButton;

LoadMoreButton.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

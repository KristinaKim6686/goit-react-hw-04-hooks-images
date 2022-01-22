import PropTypes from "prop-types";
import { Component } from "react/cjs/react.production.min";
import { GalleryItem, Image } from "./GalleryItem.styled";

class ImageGalleryItem extends Component {
  onPictureClick = () => {
    this.props.onClick(this.props.largeImageURL, this.props.tags);
    console.log(this.props);
  };
  render() {
    const { id, webformatURL, tags } = this.props;
    return (
      <GalleryItem key={id}>
        <Image
          id={id}
          src={webformatURL}
          alt={tags}
          onClick={this.onPictureClick}
        />
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;

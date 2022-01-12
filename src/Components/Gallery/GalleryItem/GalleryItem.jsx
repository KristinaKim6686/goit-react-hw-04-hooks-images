import PropTypes from "prop-types";
import { Component } from "react/cjs/react.production.min";
import { GalleryItem, Image } from "./GalleryItem.styled";

class ImageGalleryItem extends Component {
  onPictureClick = () => {
    this.props.onClick(this.props.src, this.props.alt);
  };
  render() {
    const { src, alt } = this.props;
    return (
      <GalleryItem>
        <Image src={src} alt={alt} onClick={this.onPictureClick} />
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;

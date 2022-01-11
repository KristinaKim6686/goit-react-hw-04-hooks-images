import PropTypes from "prop-types";
import { GalleryItem, Image } from "./GalleryItem.styled";

const ImageGalleryItem = ({ src, alt, onPictureClick }) => {
  return (
    <GalleryItem>
      <Image src={src} alt={alt} onClick={onPictureClick} />
    </GalleryItem>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onPictureClick: PropTypes.func.isRequired,
};

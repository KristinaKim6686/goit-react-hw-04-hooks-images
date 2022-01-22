import { Component } from "react";
import { toast } from "react-toastify";
import ImageGalleryItem from "../GalleryItem/GalleryItem";
import { Gallery, SpinnerWrapper } from "./Gallery.styled";
import Loader from "../../Loader";
import { GalleryItem } from "../GalleryItem/GalleryItem.styled";
import { Button } from "../../Button/Button.styled";

class ImageGallery extends Component {
  onPictureClick = (imageURL, alt) => {
    this.props.onClick(imageURL, alt);
    console.log(this.props);
  };
  render() {
    const { status, error, gallery, onLoadMore } = this.props;

    if (status === "idle") {
      return <h2>Enter some request</h2>;
    }
    if (status === "pending") {
      return (
        <SpinnerWrapper>
          <Loader />
        </SpinnerWrapper>
      );
    }
    if (status === "rejected") {
      return <h2>{error.message}</h2>;
    }
    if (status === "resolved" && gallery.length === 0) {
      return toast.error();
    }
    if (status === "resolved" && gallery.length !== 0) {
      return (
        <>
          <Gallery>
            {gallery.map(({ id, tags, webformatURL, largeImageURL }) => (
              <ImageGalleryItem
                id={id}
                key={id}
                tags={tags}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                onClick={this.onPictureClick}
              />
            ))}
          </Gallery>
          <Button onClick={onLoadMore}>Load more</Button>
        </>
      );
    }
  }
}
export default ImageGallery;

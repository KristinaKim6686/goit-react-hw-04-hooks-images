import { toast } from "react-toastify";
import ImageGalleryItem from "../GalleryItem/GalleryItem";
import { Gallery, SpinnerWrapper } from "./Gallery.styled";
import Loader from "../../Loader";
import { GalleryItem } from "../GalleryItem/GalleryItem.styled";
import { Button } from "../../Button/Button.styled";

function ImageGallery({ status, error, gallery, onLoadMore, onClick }) {
  const onPictureClick = (imageURL, alt) => {
    onClick(imageURL, alt);
  };

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
              onClick={onPictureClick}
            />
          ))}
        </Gallery>
        <Button onClick={onLoadMore}>Load more</Button>
      </>
    );
  }
}
export default ImageGallery;

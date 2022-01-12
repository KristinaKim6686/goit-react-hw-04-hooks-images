import { Component } from "react";
import getPictures from "../../../utils/Api";
import { toast } from "react-toastify";

import ImageGalleryItem from "../GalleryItem/GalleryItem";
import { Gallery, SpinnerWrapper } from "./Gallery.styled";
import Loader from "../../Loader";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};
class ImageGallery extends Component {
  state = {
    gallery: [],
    page: 1,
    status: Status.IDLE,
    error: null,
  };

  setPicture = async (gallery, query, page) => {
    try {
      const response = await getPictures(query, page);
      return this.setState({
        gallery: [...gallery, ...response.hits],
        status: Status.RESOLVED,
      });
    } catch (error) {
      return this.setState({ error, gallery: [], status: Status.REJECTED });
    } finally {
      if (page !== 1) {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;
    const prevGallery = prevState.gallery;

    console.log(prevState);
    if (prevQuery !== nextQuery) {
      this.setState({ page: 1, status: Status.PENDING });
      this.setPicture([], nextQuery, nextPage);
      return;
    }

    if (prevPage !== nextPage) {
      this.setState({ status: Status.PENDING });
      this.setPicture(prevGallery, nextQuery, nextPage);
    }
    return;
  }

  handlePictureSelect = (imageURL, imageALT) => {
    this.props.onClick(imageURL, imageALT);
    console.log(imageURL);
  };

  renderGallery = () => {
    return (
      <Gallery query={this.props.query} page={this.props.page}>
        {this.state.gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            largeImageURL={largeImageURL}
            alt={tags}
            onClick={this.handlePictureSelect}
          />
        ))}
      </Gallery>
    );
  };
  render() {
    const { gallery, status, error } = this.state;
    if (status === Status.IDLE) {
      return null;
    }
    if (status === Status.PENDING) {
      return (
        <>
          {this.renderGallery()}
          <SpinnerWrapper>
            <Loader />
          </SpinnerWrapper>
        </>
      );
    }
    if (status === Status.REJECTED) {
      return toast.error(error);
    }
    if (status === Status.RESOLVED && gallery.length === 0) {
      return toast.error("No matches found. Please check your request");
    }
    return this.renderGallery();
  }
}
export default ImageGallery;

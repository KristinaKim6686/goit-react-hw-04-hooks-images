import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import API from "./utils/Api";
import SearchBar from "./Components/SearchBar";
import { Component } from "react/cjs/react.production.min";
import ImageGallery from "./Components/Gallery/ImageGallery/Gallery.jsx";
import LoadMoreButton from "./Components/Button";
import Modal from "./Components/Modal";

class App extends Component {
  state = {
    query: "",
    page: 1,
    showModal: false,
    largeImageURL: "",
    imageAlt: "",
    gallery: [],
    error: null,
    status: "idle",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ status: "pending" });
      this.searchImages();
    }
    if (prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  searchImages = () => {
    const { query, page } = this.state;
    API.getImages(query, page)
      .then((response) =>
        this.setState(({ gallery, page }) => ({
          gallery: [...gallery, ...response],
          status: "resolved",
          page: page + 1,
        }))
      )
      .catch((error) => this.state({ error, status: "rejected" }));
  };

  onLoadMore = () => {
    this.searchImages();
  };

  handleFormSubmit = (query) => {
    this.setState({
      query: query,
      page: 1,
      gallery: [],
    });
  };

  onOpenModal = (url, alt) => {
    this.setState({ largeImageURL: url, alt: alt });

    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const {
      largeImageURL,
      error,
      gallery,
      status,
      query,
      showModal,
      imageAlt,
    } = this.state;
    return (
      <div className="mainContainer">
        <SearchBar query={query} onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={2000} />
        <ImageGallery
          status={status}
          error={error}
          gallery={gallery}
          onClick={this.onOpenModal}
          onLoadMore={this.onLoadMore}
        />
        {showModal && (
          <Modal
            src={largeImageURL}
            alt={imageAlt}
            closeModal={this.toggleModal}
          />
        )}
      </div>
    );
  }
}

export default App;

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
  };
  handleSearchSubmit = (query, page) => {
    this.setState({ query: query, page: 1 });
  };

  handleGalleryUpdate = (gallery) => {
    this.setState({ pictures: gallery });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  onOpenModal = (url, alt) => {
    this.setState({ largeImageURL: url, imageAlt: alt });

    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { largeImageURL, query, page, showModal } = this.state;
    return (
      <div className="mainContainer">
        <SearchBar onFormSubmit={this.handleSearchSubmit} />
        <ToastContainer autoClose={2000} />
        <ImageGallery
          query={query}
          page={page}
          getSelectedPic={this.toggleModal}
        />
        {query && <LoadMoreButton onLoadMore={this.handleLoadMore} />}
        {showModal && (
          <Modal
            closeModal={this.toggleModal}
            src={largeImageURL}
            // alt={imageAlt}
          />
        )}
      </div>
    );
  }
}

export default App;

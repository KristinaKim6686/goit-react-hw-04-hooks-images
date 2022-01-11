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
    selecdedPicture: null,
  };
  handleSearchSubmit = (query, page) => {
    this.setState({ query: query, page: 1 });
  };

  handleGalleryUpdate = (gallery) => {
    this.setState({ pictures: gallery });
  };

  handleLoadMore = () => {
    console.log(this.page);
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  handleOpenModal = (selectedPic) => {
    this.setState({ selectedPicture: selectedPic });
  };
  handleCloseModal = () => {
    this.setState({ selectedPicture: null });
  };

  render() {
    return (
      <div className="mainContainer">
        <SearchBar onFormSubmit={this.handleSearchSubmit} />
        <ToastContainer autoClose={2000} />
        <ImageGallery
          query={this.state.query}
          page={this.state.page}
          getSelectedPic={this.handleOpenModal}
        />
        {this.state.query && (
          <LoadMoreButton onLoadMore={this.handleLoadMore} />
        )}
        {this.state.selecdedPicture && (
          <Modal
          //  closeModal={this.handleCloseModal}
          //  url={this.state.selecdedPicture}
          />
        )}
      </div>
    );
  }
}

export default App;

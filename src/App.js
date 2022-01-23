import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import API from "./utils/Api";
import SearchBar from "./Components/SearchBar";
import { useState, useEffect } from "react";
import ImageGallery from "./Components/Gallery/ImageGallery/Gallery.jsx";
import LoadMoreButton from "./Components/Button";
import Modal from "./Components/Modal";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (query !== "") {
      setStatus("pending");
      searchImages();
    }
    if (page !== setPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [query]);

  const searchImages = () => {
    API.getImages(query, page)
      .then((response) => {
        setGallery([...gallery, ...response]);
        setStatus("resolved");
        setPage((page) => page + 1);
      })
      .catch((error) => {
        setError(error);
        setStatus("rejected");
      });
  };

  const onLoadMore = () => {
    searchImages();
  };

  const handleFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setGallery([]);
  };

  const onOpenModal = (url, alt) => {
    setLargeImageURL(url);
    setImageAlt(alt);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  return (
    <div className="mainContainer">
      <SearchBar query={query} onSubmit={handleFormSubmit} />
      <ToastContainer autoClose={2000} />
      <ImageGallery
        status={status}
        error={error}
        gallery={gallery}
        onClick={onOpenModal}
        onLoadMore={onLoadMore}
      />
      {showModal && (
        <Modal src={largeImageURL} alt={imageAlt} closeModal={toggleModal} />
      )}
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ImageHolder } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

function Modal({ src, alt, closeModal, children }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ImageHolder>
        {children}
        <img src={src} alt={alt} />
      </ImageHolder>
    </Overlay>,
    modalRoot
  );
}
export default Modal;

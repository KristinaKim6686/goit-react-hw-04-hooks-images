import { Component } from "react";
import { createPortal } from "react-dom";
import { Overlay, ImageHolder } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };
  render() {
    const { src, alt } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ImageHolder>
          {this.props.children}
          <img src={src} alt={alt} />
        </ImageHolder>
      </Overlay>,
      modalRoot
    );
  }
}
export default Modal;

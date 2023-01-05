import classes from "./Modal.module.scss";
import React from "react";
import ReactDOM from "react-dom";

function Backdrop({ onHideModal }) {
  return <div className={classes.backdrop} onClick={onHideModal}></div>;
}

function ModalWindow({ children }) {
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>{children}</div>
    </div>
  );
}

function Modal({ children, onHideModal }) {
  const overlays = document.getElementById("overlays");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onHideModal={onHideModal} />, overlays)}
      {ReactDOM.createPortal(<ModalWindow>{children}</ModalWindow>, overlays)}
    </React.Fragment>
  );
}

export default Modal;

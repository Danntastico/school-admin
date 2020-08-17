import React, { useRef, useEffect } from "react";
import { Modal, ModalChildren } from "./styles";
export const ModalContainer = ({ children, modalIsOpen }) => {
  const modalRef = useRef(false);
  useEffect(() => {
    if (modalIsOpen) {
      modalRef.current.style.display = "block";
    } else {
      modalRef.current.style.display = "none";
    }
  }, [modalIsOpen]);
  return (
    <Modal ref={modalRef} className="modal">
      <ModalChildren className="modal__content">{children}</ModalChildren>
    </Modal>
  );
};

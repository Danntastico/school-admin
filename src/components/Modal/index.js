import React, { useRef, useEffect } from "react";
import { Modal as ModalStyled, ModalChildren } from "./styles";
export const Modal = ({ children, modalIsOpen }) => {
  const modalRef = useRef(false);
  useEffect(() => {
    if (modalIsOpen) {
      modalRef.current.style.display = "block";
    } else {
      modalRef.current.style.display = "none";
    }
  }, [modalIsOpen]);
  return (
    <ModalStyled ref={modalRef} className="modal">
      <ModalChildren className="modal__content">{children}</ModalChildren>
    </ModalStyled>
  );
};

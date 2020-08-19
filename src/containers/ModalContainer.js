import React from "react";
import { Modal } from "../components/Modal";

export const ModalContainer = ({ isModalOpen, children, handleSubmit }) => {
  return (
    isModalOpen && (
      <Modal modalIsOpen={isModalOpen} onSubmit={handleSubmit}>
        {children}
      </Modal>
    )
  );
};

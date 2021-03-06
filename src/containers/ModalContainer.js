import React from "react";
import { Modal } from "../components/common/Modal";

export const ModalContainer = ({ isModalOpen, children }) => {
  return isModalOpen && <Modal modalIsOpen={isModalOpen}>{children}</Modal>;
};

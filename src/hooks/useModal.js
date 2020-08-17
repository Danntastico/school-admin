import { useState } from "react";

export const useModal = ({ reset }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    reset();
  };

  return [isModalOpen, openModal, closeModal];
};

'use client'

import { useState } from 'react';

export default function useModal<T>(initialContent: T | null) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<T | null>(initialContent);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return {
    isModalOpen,
    openModal,
    closeModal,
    modalContent,
    setModalContent,
  };
}

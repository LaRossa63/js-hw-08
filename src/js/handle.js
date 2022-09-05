import {
  checkValidClickImage,
  setModalImage,
  setEventListenerModal,
  openModalWindow,
  closeModalWindow,
  removeEventListenerModal,
  getCurrentIndexImage,
} from './utils';

export const handleOpenModal = event => {
  if (!checkValidClickImage(event)) {
    return;
  }

  event.preventDefault();

  setEventListenerModal();
  setModalImage({ src: event.target.src, alt: event.target.alt });
  openModalWindow();
};

export const handleCloseModal = () => {
  removeEventListenerModal();
  setModalImage({ src: '', alt: '' });
  closeModalWindow();
};

export const handleNextLeftSlide = () => {
  const index = getCurrentIndexImage();
};

export const handleNextRightSlide = () => {
  const index = getCurrentIndexImage();
};

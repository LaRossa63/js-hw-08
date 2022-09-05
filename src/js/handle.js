import {
  checkValidClickImage,
  setModalImage,
  setEventListenerModal,
  openModalWindow,
  closeModalWindow,
  removeEventListenerModal,
  getCurrentIndexSlide,
  NextLeftSlide,
  NextRightSlide,
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
  NextLeftSlide(getCurrentIndexSlide());
};

export const handleNextRightSlide = () => {
  NextRightSlide(getCurrentIndexSlide());
};

export const handlePressKey = event => {
  switch (event.code) {
    case 'ArrowLeft':
      handleNextLeftSlide();
      break;

    case 'ArrowRight':
      handleNextRightSlide();
      break;

    case 'Escape':
      handleCloseModal();
      break;
  }
};

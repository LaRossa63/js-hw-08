import { ref } from './ref';
import { items } from './data';
import {
  handleCloseModal,
  handleNextLeftSlide,
  handleNextRightSlide,
  handlePressKey,
} from './handle';

export const checkValidClickImage = event => {
  if (event.target.closest('.gallery__container-item')) {
    return true;
  }

  return false;
};

export const setModalImage = ({ src, alt }) => {
  ref.modalImage.src = src;
  ref.modalImage.alt = alt;
};

export const openModalWindow = () => {
  ref.modalWindow.classList.remove('close');
};

export const closeModalWindow = () => {
  ref.modalWindow.classList.add('close');
};

export const getCurrentIndexSlide = () => {
  return items.findIndex(item => item.img === ref.modalImage.src);
};

export const NextLeftSlide = index => {
  const lengthArray = items.length - 1;

  if (index === 0) {
    setModalImage({ src: items[lengthArray].img, alt: items[lengthArray].alt });
    return;
  }

  setModalImage({ src: items[index - 1].img, alt: items[index - 1].alt });
};

export const NextRightSlide = index => {
  const lengthArray = items.length - 1;

  if (index === lengthArray) {
    setModalImage({ src: items[0].img, alt: items[0].alt });
    return;
  }

  setModalImage({ src: items[index + 1].img, alt: items[index + 1].alt });
};

export const setEventListenerModal = () => {
  ref.modalClose.addEventListener('click', handleCloseModal);
  ref.modalArrowLeft.addEventListener('click', handleNextLeftSlide);
  ref.modalArrowRight.addEventListener('click', handleNextRightSlide);

  document.addEventListener('keyup', handlePressKey);
};

export const removeEventListenerModal = () => {
  ref.modalClose.removeEventListener('click', handleCloseModal);
  ref.modalArrowLeft.removeEventListener('click', handleNextLeftSlide);
  ref.modalArrowRight.removeEventListener('click', handleNextRightSlide);

  document.removeEventListener('keyup', handlePressKey);
};

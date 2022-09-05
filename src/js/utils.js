import { ref } from './ref';
import { items } from './data';
import {
  handleCloseModal,
  handleNextLeftSlide,
  handleNextRightSlide,
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
export const getCurrentIndexImage = () => {
  return items.findIndex(item => item.img === ref.modalImage.src);
};

export const setEventListenerModal = () => {
  ref.modalClose.addEventListener('click', handleCloseModal);
  ref.modalArrowLeft.addEventListener('click', handleNextLeftSlide);
  ref.modalArrowRight.addEventListener('click', handleNextRightSlide);
};

export const removeEventListenerModal = () => {
  ref.modalClose.removeEventListener('click', handleCloseModal);
  ref.modalArrowLeft.removeEventListener('click', handleNextLeftSlide);
  ref.modalArrowRight.removeEventListener('click', handleNextRightSlide);
};

import { items } from './data';
import { ref } from './ref';

const elements = items.map(item => {
  return `
  <li class="gallery__container-item">
    <a
      class="item__link"
      href="${item.img}"
    >

    <img
      class="item__img"
      src="${item.img}"
      alt="${item.alt}"
    />

    </a>
  </li>
  `;
});

ref.output.insertAdjacentHTML('beforeend', elements.join(''));

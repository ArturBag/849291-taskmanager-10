import {createElement} from '../utils.js';

const createButton = () => `<button class="load-more" type="button">load more</button>`;

export default class Button {
  constructor(task) {
    this._task = task;

    this._element = null;
  }

  getTemplate() {
    return createButton(this._task);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

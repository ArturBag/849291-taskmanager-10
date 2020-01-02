import AbstractComponent from './abstract-component.js';

const createButton = () => `<button class="load-more" type="button">load more</button>`;

export default class Button extends AbstractComponent {

  getTemplate() {

    return createButton();
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }

}


import {createMenu} from './components/menu.js';
import {createContent} from './components/blocks.js';
import {createSearchForm} from './components/controls.js';
import {createFilterList} from './components/filters.js';
import {createBoardTasks} from './components/blocks.js';
import {createCard} from './components/cards.js';
import {createButton} from './components/button.js';


const renderElement = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const CARDS_QTY = 3;

const mainControl = document.querySelector(`.main__control`);
const mainSection = document.querySelector(`.main`);

renderElement(mainControl, createMenu(), `beforeend`);
renderElement(mainSection, createSearchForm(), `beforeend`);
renderElement(mainSection, createContent(), `beforeend`);

const board = document.querySelector(`.board`);

renderElement(board, createFilterList(), `beforeend`);
renderElement(board, createBoardTasks(), `beforeend`);

const boardTasks = document.querySelector(`.board__tasks`);

for (let i = 0; i < CARDS_QTY; i++) {
  renderElement(boardTasks, createCard(), `beforeend`);
}

renderElement(board, createButton(), `beforeend`);

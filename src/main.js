
import {createMenu} from './components/menu.js';
import {createContent} from './components/blocks.js';
import {createFilterTemplate} from './components/controls.js';
import {createSortingList} from './components/sorting.js';
import {createBoardTasks} from './components/blocks.js';
import {createTaskEditTemplate} from './components/card-edit.js';
import {createTaskTemplate} from './components/cards.js';
import {createButton} from './components/button.js';
import {generateTasks} from './mocks/task.js';
import {generateFilters} from './mocks/filter.js';

const renderElement = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const CARDS_QTY = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const mainControl = document.querySelector(`.main__control`);
const mainSection = document.querySelector(`.main`);

renderElement(mainControl, createMenu(), `beforeend`);

const filters = generateFilters();

renderElement(mainSection, createFilterTemplate(filters), `beforeend`);
renderElement(mainSection, createContent(), `beforeend`);

const board = document.querySelector(`.board`);

renderElement(board, createSortingList(), `beforeend`);

renderElement(board, createBoardTasks(), `beforeend`);

const boardTasks = document.querySelector(`.board__tasks`);
const tasks = generateTasks(CARDS_QTY);

renderElement(boardTasks, createTaskEditTemplate(tasks[0]), `beforeend`);

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
tasks.slice(1, showingTasksCount).forEach((task) => renderElement(boardTasks, createTaskTemplate(task), `beforeend`));

renderElement(board, createButton(), `beforeend`);

const loadMoreButton = board.querySelector(`.load-more`);
loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => renderElement(boardTasks, createTaskTemplate(task), `beforeend`));

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});

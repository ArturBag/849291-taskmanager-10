import SiteMenuComponent from './components/menu.js';
import FilterComponent from './components/controls.js';
import BoardComponent from './components/sorting.js';
import {createBoardTasks} from './components/blocks.js';
import LoadMoreButtonComponent from './components/button.js';
import TaskEditComponent from './components/card-edit.js';
import TaskComponent from './components/cards.js';
import {generateTasks} from './mocks/task.js';
import {generateFilters} from './mocks/filter.js';
import {render, RenderPosition} from './utils.js';


const CARDS_QTY = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const renderTask = (task) => {
  const taskComponent = new TaskComponent(task);
  const taskEditComponent = new TaskEditComponent(task);

  const editButton = taskComponent.getElement().querySelector(`.card__btn--edit`);
  editButton.addEventListener(`click`, () => {
    boardTasks.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
  });

  const editForm = taskEditComponent.getElement().querySelector(`form`);
  editForm.addEventListener(`submit`, () => {
    boardTasks.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
  });

  render(boardTasks, taskComponent.getElement(), RenderPosition.BEFOREEND);
};

const mainControl = document.querySelector(`.main__control`);
const mainSection = document.querySelector(`.main`);

render(mainControl, new SiteMenuComponent().getElement(), RenderPosition.BEFOREEND);

const filters = generateFilters();

render(mainSection, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);
render(mainSection, new BoardComponent().getElement(), RenderPosition.BEFOREEND);

const board = document.querySelector(`.board`);


render(board, createBoardTasks(), RenderPosition.BEFOREEND);
const boardTasks = document.querySelector(`.board__tasks`);

const tasks = generateTasks(CARDS_QTY);


let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

tasks.slice(0, showingTasksCount)
  .forEach((task) => {
    renderTask(task);
  });

const loadMoreButtonComponent = new LoadMoreButtonComponent();
render(board, loadMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

loadMoreButtonComponent.getElement().addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => renderTask(task));
  if (showingTasksCount >= tasks.length) {

    loadMoreButtonComponent.getElement().remove();
    loadMoreButtonComponent.removeElement();
  }
});

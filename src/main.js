import BoardComponent from './components/board.js';
import SiteMenuComponent from './components/menu.js';
import FilterComponent from './components/controls.js';
import SortComponent from './components/sorting.js';
import NoTasksComponent from './components/no-tasks.js';
import BoardTasksComponent from './components/board-tasks.js';
import LoadMoreButtonComponent from './components/button.js';
import TaskEditComponent from './components/card-edit.js';
import TaskComponent from './components/cards.js';
import {generateTasks} from './mocks/task.js';
import {generateFilters} from './mocks/filter.js';
import {render, RenderPosition} from './utils.js';


const CARDS_QTY = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const renderTask = (boardTasks, task) => {

  const onEscKeyDown = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      replaceEditToTask();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const replaceEditToTask = () => {
    boardTasks.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
  };

  const replaceTaskToEdit = () => {
    boardTasks.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
  };

  const taskComponent = new TaskComponent(task);
  const editButton = taskComponent.getElement().querySelector(`.card__btn--edit`);

  editButton.addEventListener(`click`, () => {
    replaceTaskToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  const taskEditComponent = new TaskEditComponent(task);
  const editForm = taskEditComponent.getElement().querySelector(`form`);

  editForm.addEventListener(`submit`, () => replaceEditToTask());

  render(boardTasks, taskComponent.getElement(), RenderPosition.BEFOREEND);
};

const mainControl = document.querySelector(`.main__control`);
const mainSection = document.querySelector(`.main`);

render(mainControl, new SiteMenuComponent().getElement(), RenderPosition.BEFOREEND);

const filters = generateFilters();
render(mainSection, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
render(mainSection, boardComponent.getElement(), RenderPosition.BEFOREEND);

const tasks = generateTasks(CARDS_QTY);

const isAllTasksArchived = tasks.every((task) => task.isArchive);

if (isAllTasksArchived) {
  render(boardComponent.getElement(), new NoTasksComponent().getElement(), RenderPosition.BEFOREEND);
} else {
  render(boardComponent.getElement(), new SortComponent().getElement(), RenderPosition.BEFOREEND);
  render(boardComponent.getElement(), new BoardTasksComponent().getElement(), RenderPosition.BEFOREEND);

  const boardTasks = boardComponent.getElement().querySelector(`.board__tasks`);

  let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
  tasks.slice(0, showingTasksCount)
    .forEach((task) => {
      renderTask(boardTasks, task);
    });

  const loadMoreButtonComponent = new LoadMoreButtonComponent();
  render(boardComponent.getElement(), loadMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

  loadMoreButtonComponent.getElement().addEventListener(`click`, () => {
    const prevTasksCount = showingTasksCount;
    showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

    tasks.slice(prevTasksCount, showingTasksCount)
      .forEach((task) => renderTask(boardTasks, task));
    if (showingTasksCount >= tasks.length) {

      loadMoreButtonComponent.getElement().remove();
      loadMoreButtonComponent.removeElement();
    }
  });
}

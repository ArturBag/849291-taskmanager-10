import BoardComponent from './components/board.js';
import BoardController from './controllers/board.js';
import SiteMenuComponent from './components/menu.js';
import FilterComponent from './components/controls.js';
import {generateTasks} from './mocks/task.js';
import {generateFilters} from './mocks/filter.js';
import {render, RenderPosition} from './utils/render.js';

const CARDS_QTY = 22;

const mainSection = document.querySelector(`.main`);
const mainControl = document.querySelector(`.main__control`);

render(mainControl, new SiteMenuComponent().getElement(), RenderPosition.BEFOREEND);

const filters = generateFilters();
render(mainSection, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
render(mainSection, boardComponent.getElement(), RenderPosition.BEFOREEND);

const tasks = generateTasks(CARDS_QTY);

const boardController = new BoardController(boardComponent);

boardController.render(tasks);

import AbstractComponent from './abstract-component.js';

const createTasksTemplate = () => {
  return (
    `<div class="board__tasks"></div>`
  );
};


export default class BoardTasks extends AbstractComponent {

  getTemplate() {
    return createTasksTemplate();
  }

}

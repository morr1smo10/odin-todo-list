import { todo } from './todo';
import { project } from './project';

class dashboard {
  constructor () {
    this.project_list = [
    new project ("Default Project 1", 
    [new todo ("Default_todo_1", "the first todo of default", 2024, 4, 1, 1),
    new todo ("Default_todo_2", "the second todo of default", 2024, 4, 2, 2),
    new todo ("Default_todo_3", "the third todo of default", 2024, 4, 3, 3),
    new todo ("Default_todo_4", "the fourth todo of default", 2024, 4, 4, 4),
    new todo ("Default_todo_5", "the fifth todo of default", 2024, 4, 5, 5)]),
    new project ("Default Project 2", 
    [new todo ("Default_todo_1", "the first todo of default 2", 2024, 4, 1, 1),
    new todo ("Default_todo_2", "the second todo of default 2", 2024, 4, 2, 2),
    new todo ("Default_todo_3", "the third todo of default 2", 2024, 4, 3, 3),
    new todo ("Default_todo_4", "the fourth todo of default 2", 2024, 4, 4, 4),
    new todo ("Default_todo_5", "the fifth todo of default 2", 2024, 4, 5, 5)])
    ];
  };

  create_project (project) {
    this.project_list.push(project);
  }
}

export {dashboard};